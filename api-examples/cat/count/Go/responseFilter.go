package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://<catalogue-server-ip>/catalogue/v1/count?attribute-filter=(tags,id)"
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
