import requests

url = "https://<catalogue-server-ip>/catalogue/v1/search?lat=12.273737&lon=78.37475&radius=200000"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

