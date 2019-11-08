OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://<catalogue-server-ip>/catalogue/v1/search?lat=18.4&lon=73.9&radius=200000&attribute-name=(tags,provider,resourceServerGroup)&attribute-value=((streetlight,flood),(pscdcl),(pudx-resource-server/flood-sensor))")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
