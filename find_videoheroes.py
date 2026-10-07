import urllib.request
import re

req = urllib.request.Request(
    'https://www.iautohaus.ca/assets/index-D_i8-ZSe.js',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

with urllib.request.urlopen(req) as resp:
    data = resp.read().decode('utf-8', errors='ignore')

# find occurrences of Zd or videoHeroes
idx = 0
while True:
    idx = data.find('videoHeroes', idx)
    if idx == -1:
        break
    start = max(0, idx - 200)
    end = min(len(data), idx + 400)
    print("--- MATCH AT", idx, "---")
    print(data[start:end])
    idx += 11
