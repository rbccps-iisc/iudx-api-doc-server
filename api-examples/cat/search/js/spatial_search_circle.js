var settings = {
  "url": "https://<catalogue-server-ip>/catalogue/v1/search?lat=12.273737&lon=78.37475&radius=200000",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
