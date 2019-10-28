import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/count"

querystring = {"attribute-filter":"%28tags,id%29"}

payload = ""

response = requests.request("GET", url, data=payload, params=querystring)

print(response.text)