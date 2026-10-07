import numpy as np
import imageio
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw
import math
import os

print("Generating custom ABCD CARS luxury hero video...")

# Output configuration
output_video_path = "videos/abcd_hero_cinematic.mp4"
os.makedirs("videos", exist_ok=True)

# Use our custom generated 8K luxury hypercar in dark red showroom
car_img_path = "images/hero_car.jpg"
if not os.path.exists(car_img_path):
    # fallback to any available high-res image
    car_img_path = "images/lambo_revuelto.jpg"

base_image = Image.open(car_img_path).convert("RGB")
src_w, src_h = base_image.size
print(f"Loaded source image {car_img_path} ({src_w}x{src_h})")

# Target video: 1920x1080 at 30fps, 6 seconds = 180 frames (smooth loop)
vw, vh = 1920, 1080
fps = 30
duration = 6
total_frames = fps * duration

writer = imageio.get_writer(
    output_video_path,
    fps=fps,
    codec='libx264',
    quality=9,
    pixelformat='yuv420p',
    macro_block_size=1
)

# Pre-calculate floor reflection gradient mask
floor_mask = np.zeros((vh, vw), dtype=np.float32)
for y in range(vh):
    if y > vh * 0.55:
        floor_mask[y, :] = ((y - vh * 0.55) / (vh * 0.45)) ** 1.6

for f in range(total_frames):
    t = f / total_frames
    
    # Smooth continuous orbit sweep: -1 (left angle) to +1 (right angle) to -1 (left angle)
    # Using cosine for buttery smooth deceleration at the apexes
    angle_sweep = -math.cos(t * 2 * math.pi)
    
    # Dynamic camera zoom & elevation breathing
    zoom = 1.10 + 0.08 * math.sin(t * 2 * math.pi)
    
    crop_w = int(src_w / zoom)
    crop_h = int(src_h / zoom)
    
    max_pan_x = (src_w - crop_w) // 2
    shift_x = int(angle_sweep * (max_pan_x * 0.92))
    
    # Slight vertical camera breathing
    shift_y = int(math.sin(t * 2 * math.pi * 2) * 15)
    
    center_x = src_w // 2 + shift_x
    center_y = int(src_h * 0.50) + shift_y
    
    left = max(0, min(src_w - crop_w, center_x - crop_w // 2))
    top = max(0, min(src_h - crop_h, center_y - crop_h // 2))
    right = left + crop_w
    bottom = top + crop_h
    
    cropped = base_image.crop((left, top, right, bottom))
    frame = cropped.resize((vw, vh), Image.Resampling.LANCZOS)
    
    frame_arr = np.array(frame, dtype=np.float32)
    
    # 1. Dark Red Showroom Ambient Light Sweep
    # A soft crimson volumetric light bar travels across the car
    light_x = int((angle_sweep * 0.5 + 0.5) * vw)
    x_coords = np.arange(vw)
    light_beam = np.exp(-((x_coords - light_x) ** 2) / (2 * (280 ** 2)))
    
    # Apply crimson light bloom (R boost, subtle B)
    frame_arr[:, :, 0] += light_beam[None, :] * 22.0
    frame_arr[:, :, 2] += light_beam[None, :] * 4.0
    
    # 2. Glowing Headlights Anamorphic Flare
    # Pulsing headlights intensity
    headlight_pulse = 0.6 + 0.4 * math.sin(t * 2 * math.pi * 3)
    if angle_sweep < 0.3: # Visible when facing front-left/center
        flare_y = int(vh * 0.56)
        flare_mask = np.exp(-((np.arange(vh) - flare_y) ** 2) / 36)[:, None]
        flare_x = np.exp(-((x_coords - (vw * 0.52 + shift_x * 0.5)) ** 2) / (2 * 450 ** 2))[None, :]
        anamorphic = flare_mask * flare_x * headlight_pulse * 40.0
        frame_arr[:, :, 0] += anamorphic * 0.9
        frame_arr[:, :, 1] += anamorphic * 0.8
        frame_arr[:, :, 2] += anamorphic * 1.0
        
    # 3. Polished Showroom Floor Red Glow
    red_floor_pulse = 14.0 + 8.0 * math.sin(t * 2 * math.pi)
    frame_arr[:, :, 0] += floor_mask * red_floor_pulse
    
    # 4. Cinematic Dark Edge Vignette
    # Darken edges for ultra-luxury theater presentation
    edge_y = np.linspace(-1, 1, vh)[:, None] ** 2
    edge_x = np.linspace(-1, 1, vw)[None, :] ** 2
    vignette = 1.0 - 0.28 * (edge_y + edge_x)
    vignette = np.clip(vignette, 0.68, 1.0)
    
    frame_arr *= vignette[:, :, None]
    
    # Clip to valid 8-bit RGB
    final_frame = np.clip(frame_arr, 0, 255).astype(np.uint8)
    writer.append_data(final_frame)

writer.close()
file_size = os.path.getsize(output_video_path)
print(f"Successfully generated new custom hero video: {output_video_path} ({file_size} bytes)")
