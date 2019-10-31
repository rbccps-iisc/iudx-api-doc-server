OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://catalogue.iudx.org.in/catalogue/v1/search?attribute-name=%28tags%29&attribute-value=%28traffic%29")
  .get()
  .build();

Response response = client.newCall(request).execute();