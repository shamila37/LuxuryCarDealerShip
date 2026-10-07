import urllib.request
import json

url = "https://archive.org/advancedsearch.php?q=car+turntable+OR+supercar+showroom+format%3AMP4&fl[]=identifier,title,downloads&sort[]=downloads+desc&rows=10&page=1&output=json"

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        docs = data.get('response', {}).get('docs', [])
        print("Archive docs found:", len(docs))
        for doc in docs:
            print(doc.get('identifier'), doc.get('title'))
except Exception as e:
    print("Error:", e)
