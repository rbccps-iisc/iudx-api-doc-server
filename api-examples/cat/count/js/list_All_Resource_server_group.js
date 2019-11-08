var settings = {
  "url": "https://<catalogue-server-ip>/catalogue/v1/count?item-type=resourceServerGroup",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
