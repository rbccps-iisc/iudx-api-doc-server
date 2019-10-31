curl --location --request POST "https://localhost/resource-server/pscdcl/v1/count" \
--header "Content-Type: application/json" \
--data "{
	\"id\" : \"rbccps.org/aa9d66a000d94a78895de8d4c0b3a67f3450e531/pscdcl/aqm-bosch-climo/Ambedkar society circle_29\",
	\"attribute-name\" : \"LIGHT\",
	\"attribute-value\": \"1619.273\",
	\"comparison-operator\": \"propertyisequalto\"
}"
