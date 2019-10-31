package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://catalogue.iudx.org.in/catalogue/v1/count?bbox=18.4,73.9,28.6,80.2&relation=within"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}