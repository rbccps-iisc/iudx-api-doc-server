var settings = {
  "url": "https://<resource-server-ip>/resource-server/pscdcl/v1/count",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/aqm-bosch-climo/ABC Farm House Junction_4\",\n\t\"attribute-name\" : \"LIGHT\",\n\t\"attribute-value\": \"1000\",\n\t\"comparison-operator\": \"propertyisgreaterthan\"\n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
