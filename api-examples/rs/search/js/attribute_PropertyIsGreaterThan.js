var settings = {
  "url": "https://localhost/resource-server/pscdcl/v1/search",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/aqm-bosch-climo/Karve Statue Square_5\",\n\t\"attribute-name\" : \"LIGHT\",\n\t\"attribute-value\": \"1000\",\n\t\"comparison-operator\": \"propertyisgreaterthan\"\n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});