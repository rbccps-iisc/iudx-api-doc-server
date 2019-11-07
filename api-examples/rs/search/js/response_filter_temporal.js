var settings = {
  "url": "https://<resource-server-ip>/resource-server/pscdcl/v1/search",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/aqm-bosch-climo/ABC Farm House Junction_4\",\n\t\"time\": \"2019-09-26T06:18:54.717+05:30\",\n\t\"TRelation\": \"before\",\n\t\"attribute-filter\" : [\"LASTUPDATEDATETIME\"] \n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
