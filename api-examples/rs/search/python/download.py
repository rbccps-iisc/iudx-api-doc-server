import requests

url = "https://<resource-server-ip>/resource-server/pscdcl/v1/download"

payload = "{\n\t\"resourceServerGroup\" : \"urn:iudx-catalogue-pune:pudx-resource-server/aqm-bosch-climo\",\n\t\"options\": \"all\"\n}"
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

