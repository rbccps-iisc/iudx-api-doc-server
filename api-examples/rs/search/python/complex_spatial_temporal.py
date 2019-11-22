import requests

url = "https://<resource-server-ip>/resource-server/pscdcl/v1/search"

payload = "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/changebhai/crowd-sourced-images\",\n\t\"geometry\":\"polygon((18.0,72.0),(20.2,75.3),(23.6,69.1),(23.6,65.5),(19.7,65.5),(18.0,72.0))\",\n\t\"time\": \"2019-11-01T00:00:00+05:30/2019-11-06T00:00:00+05:30\",\n\t\"TRelation\": \"during\"\n}"
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

