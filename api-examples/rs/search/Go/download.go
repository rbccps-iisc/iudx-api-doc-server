package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<resource-server-ip>/resource-server/pscdcl/v1/download"
  method := "POST"

  payload := strings.NewReader("{\n	\"resourceServerGroup\" : \"urn:iudx-catalogue-pune:pudx-resource-server/aqm-bosch-climo\",\n	\"options\": \"all\"\n}")

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
