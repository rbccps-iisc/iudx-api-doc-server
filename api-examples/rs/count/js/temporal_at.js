var settings = {
  "url": "https://<resource-server-ip>/resource-server/pscdcl/v1/count",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/changebhai/crowd-sourced-images\",\n\t\"time\": \"2019-11-06T12:33:28.000+05:30\",\n\t\"TRelation\": \"TEquals\"\n}",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
