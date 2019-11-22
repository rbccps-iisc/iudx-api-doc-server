OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n\t\"resourceServerGroup\" : \"urn:iudx-catalogue-pune:pudx-resource-server/aqm-bosch-climo\",\n\t\"options\": \"all\"\n}");
Request request = new Request.Builder()
  .url("https://<resource-server-ip>/resource-server/pscdcl/v1/download")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
