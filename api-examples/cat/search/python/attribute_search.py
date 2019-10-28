import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/search"

querystring = {"attribute-name":"%28tags%29","attribute-value":"%28traffic%29"}

payload = ""

response = requests.request("GET", url, data=payload, params=querystring)

print(response.text)