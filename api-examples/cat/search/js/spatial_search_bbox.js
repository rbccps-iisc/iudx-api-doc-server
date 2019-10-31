var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://catalogue.iudx.org.in/catalogue/v1/search?bbox=18.4,73.9,28.6,80.2&relation=within",
    "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });