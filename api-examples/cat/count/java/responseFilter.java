OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://catalogue.iudx.org.in/catalogue/v1/count?attribute-filter=%28tags,id%29")
  .get()
  .build();

Response response = client.newCall(request).execute();