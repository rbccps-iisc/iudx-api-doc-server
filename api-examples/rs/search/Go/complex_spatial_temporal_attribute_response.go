package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<resource-server-ip>/resource-server/pscdcl/v1/search"
  method := "POST"

  payload := strings.NewReader("{\n	\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pudx-resource-server/changebhai/crowd-sourced-images\",\n	\"geometry\":\"polygon((18.0,72.0),(20.2,75.3),(23.6,69.1),(23.6,65.5),(19.7,65.5),(18.0,72.0))\",\n	\"attribute-filter\":[\"image_path\"],\n	\"time\": \"2019-11-01T00:00:00+05:30/2019-11-06T00:00:00+05:30\",\n	\"TRelation\": \"during\",\n	\"attribute-name\" : \"longitude\",\n	\"attribute-value\": \"73.760989\",\n	\"comparison-operator\": \"propertyisequalto\"\n}")

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("Content-Type", "application/json")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
