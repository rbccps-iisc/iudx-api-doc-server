import requests

url = "https://<catalogue-server-ip>/catalogue/v1/search"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))
import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/search/catalogue/v1/search"

payload = ""

response = requests.request("GET", url, data=payload)

print(response.text)
