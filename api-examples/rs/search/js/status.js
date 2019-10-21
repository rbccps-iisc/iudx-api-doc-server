var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://pune.iudx.org.in/resource-server/pscdcl/v1/search",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "processData": false,
    "data": "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/aqm-bosch-climo/ABC Farm House Junction_4\",\n\t\"options\": \"status\"\n}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });