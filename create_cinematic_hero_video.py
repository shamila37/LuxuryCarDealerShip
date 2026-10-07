import numpy as np
import imageio
from PIL import Image, ImageEnhance, ImageFilter
import math
import os

print("Generating high-definition cinematic car sweep video...")

output_path = "videos/hero_cinematic_sweep.mp4"
os.makedirs("videos", exist_ok=True)

# Load the real iautohaus showroom car image
img_path = "iauto_card.jpg"
if not os.path.exists(img_path):
    img_path = "images/hero_car.jpg"

base_img = Image.open(img_path).convert("RGB")
src_w, src_h = base_img.size

# Video target: 1920x1080 at 30 fps, 6 seconds = 180 frames
vw, vh = 1920, 1080
fps = 30
duration = 6
total_frames = fps * duration

writer = imageio.get_writer(
    output_path,
    fps=fps,
    codec='libx264',
    quality=8,
    pixelformat='yuv420p',
    macro_block_size=1
)

for f in range(total_frames):
    # Normalized time 0.0 to 1.0 (loops seamlessly)
    t = f / total_frames
    
    # Smooth sinusoidal oscillation for camera sweep: Left (-1) to Right (+1) to Left (-1)
    # This allows continuous looping without abrupt cuts
    sweep = math.sin(t * 2 * math.pi)
    
    # Crop window coordinates with smooth pan and zoom
    # Zoom scale between 1.05 and 1.18
    zoom = 1.08 + 0.06 * math.cos(t * 2 * math.pi)
    
    crop_w = int(src_w / zoom)
    crop_h = int(src_h / zoom)
    
    # Horizontal shift based on sweep
    max_shift_x = (src_w - crop_w) // 2
    shift_x = int(sweep * (max_shift_x * 0.85))
    
    center_x = src_w // 2 + shift_x
    center_y = int(src_h * 0.52)
    
    left = max(0, min(src_w - crop_w, center_x - crop_w // 2))
    top = max(0, min(src_h - crop_h, center_y - crop_h // 2))
    right = left + crop_w
    bottom = top + crop_h
    
    cropped = base_img.crop((left, top, right, bottom))
    resized = cropped.resize((vw, vh), Image.Resampling.BICUBIC)
    
    # Add subtle dynamic red showroom lighting pulse and headlights glow
    glow_intensity = 0.5 + 0.5 * math.sin(t * 2 * math.pi * 2)
    
    # Convert to numpy for fast post-processing
    frame_arr = np.array(resized, dtype=np.float32)
    
    # Add subtle dark red ambient glow to floor and background
    # Red channel boost in lower third (reflective floor)
    floor_mask = np.linspace(0, 1, vh)[:, None] ** 2
    frame_arr[:, :, 0] += floor_mask * (12.0 + 8.0 * glow_intensity)
    frame_arr[:, :, 2] += floor_mask * 2.0
    
    # Clip to valid 0-255 range
    frame_arr = np.clip(frame_arr, 0, 255).astype(np.uint8)
    
    writer.append_data(frame_arr)

writer.close()
print("Success! Generated:", output_path, "Size:", os.path.getsize(output_path), "bytes")
