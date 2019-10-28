var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://pune.iudx.org.in/resource-server/pscdcl/v1/search",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "processData": false,
    "data": "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/streetlight-feeder-sree/ORCHADE PALACE, WOODHAYAT FURNITURE\",\n\t\"time\": \"2019-10-01\",\n\t\"TRelation\": \"after\"\n}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });