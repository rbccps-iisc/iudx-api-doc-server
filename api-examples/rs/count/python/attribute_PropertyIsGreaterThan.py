import requests

url = "https://<resource-server-ip>/resource-server/pscdcl/v1/count"

payload = "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/aqm-bosch-climo/ABC Farm House Junction_4\",\n\t\"attribute-name\" : \"LIGHT\",\n\t\"attribute-value\": \"1000\",\n\t\"comparison-operator\": \"propertyisgreaterthan\"\n}"
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

