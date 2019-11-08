var settings = {
  "url": "https://pudx.catalogue.iudx.org.in/catalogue/v1/search?attribute-name=(tags,resourceServerGroup)&attribute-value=((streetlight,flood),(pudx-resource-server/flood-sensor))",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
