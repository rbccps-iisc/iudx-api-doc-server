
# IUDX API Docs

This tool will use yaml files to generate API Docs for IUDX entities like Catalogue, Auth, Resource Server etc.


# Setup
```bash
git clone https://github.com/rbccps-iisc/iudx-api-doc-server
cd iudx-api-doc-server
npm install
```

## NOTE
Place server certificate and key in **cert/** directory for enabling https.

## Development Server
```bash
npm test
```
The server will be listening at **https://localhost:19443**
## Production Server
```bash
npm start
```
The server will be listening at **https://localhost:9443**

## Author
[Jishnu P](https://jishnujayakumar.github.io)
