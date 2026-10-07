import urllib.request
import json

req = urllib.request.Request(
    'https://www.iautohaus.ca/api/hero',
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.iautohaus.ca/'
    }
)

try:
    with urllib.request.urlopen(req) as resp:
        data = resp.read().decode('utf-8')
        print(data[:1000])
except Exception as e:
    print("Error:", e)
