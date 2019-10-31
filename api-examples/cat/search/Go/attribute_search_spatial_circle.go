package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://catalogue.iudx.org.in/catalogue/v1/search?attribute-name=%28tags%29&attribute-value=%28traffic%29&lat=12.273737&lon=78.37475&radius=200000"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}