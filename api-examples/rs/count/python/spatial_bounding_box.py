import requests

url = "https://<resource-server-ip>/resource-server/pscdcl/v1/count"

payload = "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/changebhai/crowd-sourced-images\",\n\t\"bbox\":\"18.2,73.6,24.2,76.6\"\n}"
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

