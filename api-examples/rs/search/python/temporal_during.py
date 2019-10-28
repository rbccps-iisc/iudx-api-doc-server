import requests

url = "https://pune.iudx.org.in/resource-server/pscdcl/v1/search"

payload = "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/changebhai/crowd-sourced-images\",\n\t\"time\": \"2019-08-20T00:00:00.000Z/2019-08-21T00:00:00.000Z\",\n\t\"TRelation\": \"during\"\n}"
headers = {
    'Content-Type': "application/json",
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)