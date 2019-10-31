var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://catalogue.iudx.org.in/catalogue/v1/count?geometry=linestring%2818.56,73.83,18.49,73.8%29&relation=intersects",
    "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });