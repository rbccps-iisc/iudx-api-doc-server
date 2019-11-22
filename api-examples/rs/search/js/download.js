var settings = {
  "url": "https://<resource-server-ip>/resource-server/pscdcl/v1/download",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{\n\t\"resourceServerGroup\" : \"urn:iudx-catalogue-pune:pudx-resource-server/aqm-bosch-climo\",\n\t\"options\": \"all\"\n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
