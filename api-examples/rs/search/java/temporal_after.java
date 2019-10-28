OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/streetlight-feeder-sree/ORCHADE PALACE, WOODHAYAT FURNITURE\",\n\t\"time\": \"2019-10-01\",\n\t\"TRelation\": \"after\"\n}");
Request request = new Request.Builder()
  .url("https://pune.iudx.org.in/resource-server/pscdcl/v1/search")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .build();

Response response = client.newCall(request).execute();