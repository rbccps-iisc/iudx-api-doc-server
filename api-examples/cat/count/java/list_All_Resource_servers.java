OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://<catalogue-server-ip>/catalogue/v1/count?item-type=resourceServer")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
