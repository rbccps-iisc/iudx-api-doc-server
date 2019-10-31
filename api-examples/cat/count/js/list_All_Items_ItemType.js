var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://catalogue.iudx.org.in/catalogue/v1/search/catalogue/v1/count",
    "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });