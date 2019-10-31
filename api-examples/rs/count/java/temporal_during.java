OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/changebhai/crowd-sourced-images\",\n\t\"time\": \"2019-09-01T00:00:00.000Z/2019-09-03T00:00:00.000Z\",\n\t\"TRelation\": \"during\"\n}");
Request request = new Request.Builder()
  .url("https://localhost/resource-server/pscdcl/v1/count")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
