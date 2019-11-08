OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://<catalogue-server-ip>/catalogue/v1/search?lat=12.273737&lon=78.37475&radius=200000")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
