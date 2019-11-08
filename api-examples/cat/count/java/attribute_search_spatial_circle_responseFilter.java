OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://pudx.catalogue.iudx.org.in/catalogue/v1/count?attribute-name=(tags)&attribute-value=((pollution))&lat=18.4&lon=73.9&radius=200000&attribute-filter=(tags,id)")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
