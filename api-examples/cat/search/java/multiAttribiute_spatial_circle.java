OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://catalogue.iudx.org.in/catalogue/v1/count?attribute-name=%28tags,provider,resourceServerGroup%29&attribute-value=%28%28streetlight,flood%29,%28pscdcl%29,%28flood-sensor%29%29&lat=12.273737&lon=78.37475&radius=200000")
  .get()
  .build();

Response response = client.newCall(request).execute();