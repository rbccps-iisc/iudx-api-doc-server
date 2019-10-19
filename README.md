
# IUDX API Docs

This tool will use yaml files to generate API Docs for IUDX entities like Catalogue, Auth, Resource Server etc.


# Setup
```bash
git clone https://github.com/rbccps-iisc/iudx-api-doc-server
cd iudx-api-doc-server
npm install
```

#### NOTE: Place the server certificate and key in **cert/** directory for enabling https connection. Name the certificate as server.pem and key as key.pem. This nomenclature is necessary.

## Development Server
```bash
npm test
```
The server will be listening at **https://localhost:11443**
## Production Server
```bash
npm start
```
The server will be listening at **https://localhost**

## Author
[Jishnu P](https://jishnujayakumar.github.io)

## Contributors
Visit [this page](https://github.com/iudx/iudx-api-doc-server/graphs/contributors) to view all contributors
