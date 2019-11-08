OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://<catalogue-server-ip>/catalogue/v1/count?geometry=polygon((18.4,73.9,21.6,78.9,27.1,80,30,75.25,25.7,74.7,18.4,73.9))&relation=within")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
