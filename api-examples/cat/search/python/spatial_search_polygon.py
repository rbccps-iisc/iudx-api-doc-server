import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/search"

querystring = {"geometry":"polygon%28%2818.4,73.9,21.6,78.9,27.1,80,30,75.25,25.7,74.7,18.4,73.9%29%29","relation":"within"}

payload = ""

response = requests.request("GET", url, data=payload, params=querystring)

print(response.text)