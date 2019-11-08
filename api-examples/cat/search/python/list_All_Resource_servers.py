import requests

url = "https://<catalogue-server-ip>/catalogue/v1/search?item-type=resourceServer"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

