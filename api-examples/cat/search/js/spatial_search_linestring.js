var settings = {
  "url": "https://<catalogue-server-ip>/catalogue/v1/search?geometry=linestring(18.56,73.83,18.49,73.8)&relation=intersects",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
