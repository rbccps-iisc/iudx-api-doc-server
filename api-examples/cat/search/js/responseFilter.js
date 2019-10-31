var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://catalogue.iudx.org.in/catalogue/v1/search?attribute-filter=%28tags,id%29",
    "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });