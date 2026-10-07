import numpy as np
import imageio
from PIL import Image, ImageDraw, ImageFilter
import math
import os

print("Starting car turntable video generation...")

# Output configuration
width, height = 1280, 720
fps = 30
duration_sec = 6
total_frames = fps * duration_sec  # 180 frames for full 360 rotation

output_dir = "videos"
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "car_turntable.mp4")

# Load real generated car image as base texture/sprite if available
base_car_img = None
if os.path.exists("images/hero_car.jpg"):
    try:
        base_car_img = Image.open("images/hero_car.jpg").convert("RGBA")
        base_car_img = base_car_img.resize((840, 472), Image.Resampling.LANCZOS)
    except Exception as e:
        print("Image load notice:", e)

# 3D vertices for a sleek supercar chassis (centered at 0, 0, 0)
# Length: 4.4, Width: 2.0, Height: 1.1
car_parts = [
    # Main body panels (convex polygons)
    {"name": "splitter", "y": -0.35, "pts": [(-0.95, 2.2), (0.95, 2.2), (0.9, 1.8), (-0.9, 1.8)], "color": (20, 20, 24)},
    {"name": "hood", "y": -0.15, "pts": [(-0.85, 1.9), (0.85, 1.9), (0.8, 0.7), (-0.8, 0.7)], "color": (138, 0, 10)},
    {"name": "windshield", "y": 0.25, "pts": [(-0.72, 0.7), (0.72, 0.7), (0.65, -0.3), (-0.65, -0.3)], "color": (25, 25, 32)},
    {"name": "roof", "y": 0.45, "pts": [(-0.65, -0.3), (0.65, -0.3), (0.62, -1.0), (-0.62, -1.0)], "color": (110, 0, 8)},
    {"name": "rear_deck", "y": 0.1, "pts": [(-0.82, -1.0), (0.82, -1.0), (0.85, -2.1), (-0.85, -2.1)], "color": (138, 0, 10)},
    {"name": "spoiler", "y": 0.35, "pts": [(-0.98, -2.0), (0.98, -2.0), (0.98, -2.3), (-0.98, -2.3)], "color": (15, 15, 18)},
]

# Wheels locations: Front-Left, Front-Right, Rear-Left, Rear-Right
wheels = [
    (-0.95, 1.35, -0.2), (0.95, 1.35, -0.2),
    (-0.98, -1.35, -0.2), (0.98, -1.35, -0.2)
]

def project(x, y, z, angle_rad, cam_dist=6.5, fov=650):
    # Rotate around Y axis
    cos_a = math.cos(angle_rad)
    sin_a = math.sin(angle_rad)
    
    rx = x * cos_a - z * sin_a
    ry = y
    rz = x * sin_a + z * cos_a
    
    # Slight downward camera elevation
    cam_pitch = 0.22
    cos_p = math.cos(cam_pitch)
    sin_p = math.sin(cam_pitch)
    
    ey = ry * cos_p - (rz + cam_dist) * sin_p
    ez = ry * sin_p + (rz + cam_dist) * cos_p
    
    if ez <= 0.1:
        ez = 0.1
    
    px = width / 2 + (rx * fov) / ez
    py = height / 2 - (ey * fov) / ez + 40
    return px, py, ez

writer = imageio.get_writer(output_path, fps=fps, codec='libx264', quality=8)

for frame_idx in range(total_frames):
    angle = (frame_idx / total_frames) * 2 * math.pi
    
    # 1. Background studio with dramatic dark red and black radial gradients
    img = Image.new("RGB", (width, height), (6, 6, 8))
    draw = ImageDraw.Draw(img)
    
    # Soft red ambient glow in the center
    for r in range(260, 40, -20):
        alpha = int(35 * (1 - r / 260))
        draw.ellipse([width//2 - r, height//2 - r//2 + 30, width//2 + r, height//2 + r//2 + 30], fill=(alpha + 6, 6, 8))
    
    # Showroom circular red turntable track
    pts_ring = []
    pts_outer = []
    for step in range(36):
        a_step = (step / 36) * 2 * math.pi
        px, py, _ = project(math.cos(a_step)*3.2, -0.45, math.sin(a_step)*3.2, 0)
        pts_ring.append((px, py))
        px2, py2, _ = project(math.cos(a_step)*4.6, -0.45, math.sin(a_step)*4.6, 0)
        pts_outer.append((px2, py2))
    
    if len(pts_ring) > 2:
        draw.polygon(pts_ring, outline=(138, 8, 16), width=2)
        draw.polygon(pts_outer, outline=(45, 4, 8), width=1)
    
    # Ground soft underglow
    ug_x, ug_y, _ = project(0, -0.42, 0, angle)
    draw.ellipse([ug_x - 180, ug_y - 45, ug_x + 180, ug_y + 45], fill=(70, 0, 8))
    
    # Project and sort vehicle components by depth (Painter's algorithm)
    render_queue = []
    
    # Wheels
    for wx, wz, wy in wheels:
        px, py, depth = project(wx, wy, wz, angle)
        render_queue.append({
            "type": "wheel",
            "depth": depth,
            "center": (px, py),
            "wx": wx
        })
    
    # Body parts
    for part in car_parts:
        proj_pts = []
        depth_sum = 0
        for px_coord, pz_coord in part["pts"]:
            sx, sy, d = project(px_coord, part["y"], pz_coord, angle)
            proj_pts.append((sx, sy))
            depth_sum += d
        avg_depth = depth_sum / len(part["pts"])
        
        # Calculate surface normal shading relative to camera
        dx = part["pts"][1][0] - part["pts"][0][0]
        dz = part["pts"][1][1] - part["pts"][0][1]
        
        # Color with specular and dark red metallic tone
        base_c = part["color"]
        # Light modulation based on angle
        shade_factor = 0.65 + 0.35 * math.sin(angle + part["y"])
        shaded_color = (
            min(255, int(base_c[0] * shade_factor)),
            min(255, int(base_c[1] * shade_factor)),
            min(255, int(base_c[2] * shade_factor))
        )
        
        render_queue.append({
            "type": "polygon",
            "depth": avg_depth,
            "pts": proj_pts,
            "color": shaded_color,
            "name": part["name"]
        })
        
    # Sort from furthest to closest
    render_queue.sort(key=lambda item: item["depth"], reverse=True)
    
    # Draw elements
    for item in render_queue:
        if item["type"] == "wheel":
            cx, cy = item["center"]
            draw.ellipse([cx - 24, cy - 24, cx + 24, cy + 24], fill=(18, 18, 20), outline=(50, 50, 58), width=3)
            # Red brake caliper
            draw.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], fill=(175, 14, 29))
            draw.ellipse([cx - 4, cy - 4, cx + 4, cy + 4], fill=(180, 180, 190))
        elif item["type"] == "polygon":
            draw.polygon(item["pts"], fill=item["color"], outline=(190, 20, 35) if "hood" in item["name"] else (40, 40, 45))
    
    # Headlights & Taillights
    fx1, fy1, fd1 = project(-0.65, 0.05, 2.05, angle)
    fx2, fy2, fd2 = project(0.65, 0.05, 2.05, angle)
    rx1, ry1, rd1 = project(-0.75, 0.15, -2.15, angle)
    rx2, ry2, rd2 = project(0.75, 0.15, -2.15, angle)
    
    # If front is facing camera
    if fd1 < rd1:
        draw.ellipse([fx1-8, fy1-4, fx1+8, fy1+4], fill=(255, 255, 255))
        draw.ellipse([fx2-8, fy2-4, fx2+8, fy2+4], fill=(255, 255, 255))
    else:
        # Taillight red neon bar
        draw.line([rx1, ry1, rx2, ry2], fill=(255, 10, 25), width=5)
    
    # Add to video stream
    writer.append_data(np.array(img))

writer.close()
print("Success! Created:", output_path, "Size:", os.path.getsize(output_path), "bytes")
