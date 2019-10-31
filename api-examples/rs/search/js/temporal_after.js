var settings = {
  "url": "https://localhost/resource-server/pscdcl/v1/search",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/changebhai/crowd-sourced-images\",\n\t\"time\": \"2019-09-26T06:18:54.717Z\",\n\t\"TRelation\": \"after\"\n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});