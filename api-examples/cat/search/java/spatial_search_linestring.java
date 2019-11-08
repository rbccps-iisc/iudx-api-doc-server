OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://<catalogue-server-ip>/catalogue/v1/search?geometry=linestring(18.56,73.83,18.49,73.8)&relation=intersects")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
