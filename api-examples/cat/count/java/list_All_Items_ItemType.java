OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://catalogue.iudx.org.in/catalogue/v1/search/catalogue/v1/count")
  .get()
  .build();

Response response = client.newCall(request).execute();