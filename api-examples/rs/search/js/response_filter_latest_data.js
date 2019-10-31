var settings = {
  "url": "https://localhost/resource-server/pscdcl/v1/search",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/aqm-bosch-climo/ABC Farm House Junction_4\",\n\t\"options\": \"latest\",\n\t\"attribute-filter\":[\"CO_MAX\",\"SOUND\",\"STATUS\",\"LASTUPDATEDATETIME\"]\n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});