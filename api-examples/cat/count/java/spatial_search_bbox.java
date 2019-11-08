OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://<catalogue-server-ip>/catalogue/v1/count?bbox=18.4,73.9,28.6,80.2&relation=within")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
