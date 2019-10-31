OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://catalogue.iudx.org.in/catalogue/v1/count?bbox=18.4,73.9,28.6,80.2&relation=within")
  .get()
  .build();

Response response = client.newCall(request).execute();