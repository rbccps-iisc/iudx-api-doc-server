var settings = {
  "url": "https://<catalogue-server-ip>/catalogue/v1/search?attribute-name=(tags)&attribute-value=((traffic))",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
