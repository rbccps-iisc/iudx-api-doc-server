OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://catalogue.iudx.org.in/catalogue/v1/count?geometry=linestring%2818.56,73.83,18.49,73.8%29&relation=intersects")
  .get()
  .build();

Response response = client.newCall(request).execute();