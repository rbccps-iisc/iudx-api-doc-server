OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/changebhai/crowd-sourced-images\",\n\t\"time\": \"2019-08-20T00:00:00.000Z/2019-08-21T00:00:00.000Z\",\n\t\"TRelation\": \"during\"\n}");
Request request = new Request.Builder()
  .url("https://pune.iudx.org.in/resource-server/pscdcl/v1/search")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .build();

Response response = client.newCall(request).execute();