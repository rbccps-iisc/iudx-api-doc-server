import requests

url = "https://pudx.catalogue.iudx.org.in/catalogue/v1/count?attribute-name=(tags)&attribute-value=((pollution))&lat=18.4&lon=73.9&radius=200000&attribute-filter=(tags,id)"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

