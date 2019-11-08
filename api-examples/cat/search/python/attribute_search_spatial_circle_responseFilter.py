import requests

url = "https://<catalogue-server-ip>/catalogue/v1/search?attribute-name=(tags)&attribute-value=((pollution))&lat=12.273737&lon=78.37475&radius=200000&attribute-filter=(tags,id)"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

