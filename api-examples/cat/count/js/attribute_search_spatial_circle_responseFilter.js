var settings = {
  "url": "https://pudx.catalogue.iudx.org.in/catalogue/v1/count?attribute-name=(tags)&attribute-value=((pollution))&lat=18.4&lon=73.9&radius=200000&attribute-filter=(tags,id)",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
