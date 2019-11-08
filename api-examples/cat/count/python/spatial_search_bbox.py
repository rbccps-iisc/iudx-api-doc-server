import requests

url = "https://<catalogue-server-ip>/catalogue/v1/count?bbox=18.4,73.9,28.6,80.2&relation=within"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

