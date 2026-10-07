import urllib.request
import re

req = urllib.request.Request(
    'https://www.iautohaus.ca/assets/index-D_i8-ZSe.js',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

try:
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8', errors='ignore')
        
    # Search for all strings ending in .mp4 or .webm or containing video
    videos = re.findall(r'["\']([^"\']+\.(?:mp4|webm))["\']', content)
    print("Found video links:", videos)
    
    # Also search for api endpoints
    apis = re.findall(r'["\'](/api/[^"\']+)["\']', content)
    print("Found API endpoints:", set(apis))
    
    # Search for cloudflare / storage / cdn links
    cdns = re.findall(r'https?://[a-zA-Z0-9\.\-_/]+\.(?:mp4|webm|mov)', content)
    print("Found CDN videos:", cdns)
except Exception as e:
    print("Error:", e)
