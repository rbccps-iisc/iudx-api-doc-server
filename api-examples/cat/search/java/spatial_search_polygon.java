OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://catalogue.iudx.org.in/catalogue/v1/search?geometry=polygon%28%2818.4,73.9,21.6,78.9,27.1,80,30,75.25,25.7,74.7,18.4,73.9%29%29&relation=within")
  .get()
  .build();

Response response = client.newCall(request).execute();