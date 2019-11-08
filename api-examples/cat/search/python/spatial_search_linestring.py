import requests

url = "https://<catalogue-server-ip>/catalogue/v1/search?geometry=linestring(18.56,73.83,18.49,73.8)&relation=intersects"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

