import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/search/catalogue/v1/count"

payload = ""

response = requests.request("GET", url, data=payload)

print(response.text)