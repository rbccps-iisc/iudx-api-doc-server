import requests

url = "https://<catalogue-server-ip>/catalogue/v1/count?lat=18.4&lon=73.9&radius=200000&attribute-name=(tags,provider,resourceServerGroup)&attribute-value=((streetlight,flood),(pscdcl),(pudx-resource-server/flood-sensor))"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

