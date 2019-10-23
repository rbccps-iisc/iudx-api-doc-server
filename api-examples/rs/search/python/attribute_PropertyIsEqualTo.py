import requests

url = "https://pune.iudx.org.in/resource-server/pscdcl/v1/search"

payload = "{\n\t\"id\" : \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/aqm-bosch-climo/Ambedkar society circle_29\",\n\t\"attribute-name\" : \"LIGHT\",\n\t\"attribute-value\": \"2900\",\n\t\"comparison-operator\": \"propertyisequalto\",\n\t\"options\":\"latest\"\n}"
headers = {
    'Content-Type': "application/json",
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)