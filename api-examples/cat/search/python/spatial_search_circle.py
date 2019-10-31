import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/search"

querystring = {"lat":"12.273737","lon":"78.37475","radius":"200000"}

payload = ""

response = requests.request("GET", url, data=payload, params=querystring)

print(response.text)