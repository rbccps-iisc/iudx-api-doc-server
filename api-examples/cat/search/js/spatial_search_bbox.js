var settings = {
  "url": "https://<catalogue-server-ip>/catalogue/v1/search?bbox=18.4,73.9,28.6,80.2&relation=within",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
