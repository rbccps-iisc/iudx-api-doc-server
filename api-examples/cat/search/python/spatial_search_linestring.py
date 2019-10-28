import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/search"

querystring = {"geometry":"linestring%2818.56,73.83,18.49,73.8%29","relation":"intersects"}

payload = ""

response = requests.request("GET", url, data=payload, params=querystring)

print(response.text)