package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://catalogue.iudx.org.in/catalogue/v1/count?geometry=polygon%28%2818.4,73.9,21.6,78.9,27.1,80,30,75.25,25.7,74.7,18.4,73.9%29%29&relation=within"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}