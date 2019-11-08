var settings = {
  "url": "https://<catalogue-server-ip>/catalogue/v1/count?attribute-name=(tags)&attribute-value=((traffic))&lat=18.4&lon=73.9&radius=200000",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
