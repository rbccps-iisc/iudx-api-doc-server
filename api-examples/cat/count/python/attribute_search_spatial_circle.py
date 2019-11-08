import requests

url = "https://<catalogue-server-ip>/catalogue/v1/count?attribute-name=(tags)&attribute-value=((traffic))&lat=18.4&lon=73.9&radius=200000"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

