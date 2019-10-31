var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://catalogue.iudx.org.in/catalogue/v1/search?lat=12.273737&lon=78.37475&radius=200000",
    "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });