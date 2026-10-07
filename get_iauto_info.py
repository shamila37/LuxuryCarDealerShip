import urllib.request
import re

req = urllib.request.Request(
    'https://www.iautohaus.ca/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        
    print("OG Image:", re.findall(r'property="og:image"\s+content="([^"]+)"', html))
    print("OG Title:", re.findall(r'property="og:title"\s+content="([^"]+)"', html))
    print("All image URLs in HTML:", re.findall(r'https?://[^\s"\'<>]+\.(?:jpg|png|webp|avif)', html))
except Exception as e:
    print("Error:", e)
