import requests

url = "https://<catalogue-server-ip>/catalogue/v1/count?geometry=polygon((18.4,73.9,21.6,78.9,27.1,80,30,75.25,25.7,74.7,18.4,73.9))&relation=within"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

