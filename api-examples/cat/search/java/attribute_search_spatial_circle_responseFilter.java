OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://<catalogue-server-ip>/catalogue/v1/search?attribute-name=(tags)&attribute-value=((pollution))&lat=12.273737&lon=78.37475&radius=200000&attribute-filter=(tags,id)")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
