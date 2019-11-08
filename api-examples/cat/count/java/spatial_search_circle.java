OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://<catalogue-server-ip>/catalogue/v1/count?lat=18.4&lon=73.9&radius=200000")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
