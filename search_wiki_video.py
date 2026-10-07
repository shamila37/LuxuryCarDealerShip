import urllib.request
import json

url = "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=car%20rotates%20filetype:video&format=json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print("Search results:")
        for item in data.get('query', {}).get('search', []):
            print(item['title'])
except Exception as e:
    print("Error:", e)
