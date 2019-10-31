OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://catalogue.iudx.org.in/catalogue/v1/count?lat=12.273737&lon=78.37475&radius=200000")
  .get()
  .build();

Response response = client.newCall(request).execute();