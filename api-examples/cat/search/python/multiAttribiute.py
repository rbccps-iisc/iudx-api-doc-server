import requests

url = "https://pudx.catalogue.iudx.org.in/catalogue/v1/search?attribute-name=(tags,resourceServerGroup)&attribute-value=((streetlight,flood),(pudx-resource-server/flood-sensor))"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

