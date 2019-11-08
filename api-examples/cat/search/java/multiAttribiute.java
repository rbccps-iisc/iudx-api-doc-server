OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://pudx.catalogue.iudx.org.in/catalogue/v1/search?attribute-name=(tags,resourceServerGroup)&attribute-value=((streetlight,flood),(pudx-resource-server/flood-sensor))")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
