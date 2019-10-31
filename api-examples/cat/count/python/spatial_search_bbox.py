import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/count"

querystring = {"bbox":"18.4,73.9,28.6,80.2","relation":"within"}

payload = ""

response = requests.request("GET", url, data=payload, params=querystring)

print(response.text)