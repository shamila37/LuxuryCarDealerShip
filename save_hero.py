import urllib.request

req = urllib.request.Request(
    'https://www.iautohaus.ca/api/hero',
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.iautohaus.ca/'
    }
)

with urllib.request.urlopen(req) as resp:
    data = resp.read()
    with open('hero_api.json', 'wb') as f:
        f.write(data)
    print("Wrote hero_api.json successfully, size:", len(data))
