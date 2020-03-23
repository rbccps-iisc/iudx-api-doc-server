curl -XPOST https://auth.iudx.org.in/auth/v1/token		\

	--cert certificate.pem --key private-key.pem		\

	-H 'content-type: application/json'			\

	-d '{
		"request" : [											\
			{"id": "example.com/9cf2c2382cf661fc20a4776345a3be7a143a109c/rs1.com/r1"},	\
			{"id": "example.com/9cf2c2382cf661fc20a4776345a3be7a143a109c/rs2.com/r2"}	\
		]
	}'
