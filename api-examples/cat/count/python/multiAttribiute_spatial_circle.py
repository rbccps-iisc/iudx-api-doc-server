import requests

url = "https://catalogue.iudx.org.in/catalogue/v1/count"

querystring = {"attribute-name":"%28tags,provider,resourceServerGroup%29","attribute-value":"%28%28streetlight,flood%29,%28pscdcl%29,%28flood-sensor%29%29","lat":"12.273737","lon":"78.37475","radius":"200000"}

payload = ""


response = requests.request("GET", url, data=payload, params=querystring)

print(response.text)