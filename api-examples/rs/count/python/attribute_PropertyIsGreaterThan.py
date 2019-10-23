import requests

url = "https://pune.iudx.org.in/resource-server/pscdcl/v1/count"

payload = "{\n\t\"id\" : \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/aqm-bosch-climo/Ambedkar society circle_29\",\n\t\"attribute-name\" : \"LIGHT\",\n\t\"attribute-value\": \"2900\",\n\t\"comparison-operator\": \"propertyisgreaterthan\",\n\t\"options\":\"latest\"\n}"
headers = {
    'Content-Type': "application/json",
    'cache-control': "no-cache",
    'Postman-Token': "460a7034-2a96-42a5-8408-8f454fe2d929"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)