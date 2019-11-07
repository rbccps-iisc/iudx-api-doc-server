OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/changebhai/crowd-sourced-images\",\n\t\"lon\": \"18.56581555\",\n\t\"lat\":\"73.77567708\",\n\t\"radius\":\"50\"\n}");
Request request = new Request.Builder()
  .url("https://<resource-server-ip>/resource-server/pscdcl/v1/search")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
