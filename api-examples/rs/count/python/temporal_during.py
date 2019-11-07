import requests

url = "https://<resource-server-ip>/resource-server/pscdcl/v1/count"

payload = "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/aqm-bosch-climo/ABC Farm House Junction_4\",\n\t\"time\": \"2019-11-06T12:33:28.000+05:30/2019-11-06T18:00:00.000+05:30\",\n\t\"TRelation\": \"during\"\n}"
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

