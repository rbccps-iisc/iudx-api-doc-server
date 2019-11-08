package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://pudx.catalogue.iudx.org.in/catalogue/v1/search?attribute-name=(tags,resourceServerGroup)&attribute-value=((streetlight,flood),(pudx-resource-server/flood-sensor))"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
  }
  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
