package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://pune.iudx.org.in/resource-server/pscdcl/v1/search"

	payload := strings.NewReader("{\n\t\"id\": \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/streetlight-feeder-sree/ORCHADE PALACE, WOODHAYAT FURNITURE\",\n\t\"time\": \"2019-10-01\",\n\t\"TRelation\": \"after\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}