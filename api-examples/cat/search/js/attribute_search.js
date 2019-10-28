var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://catalogue.iudx.org.in/catalogue/v1/search?attribute-name=%28tags%29&attribute-value=%28traffic%29",
    "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });