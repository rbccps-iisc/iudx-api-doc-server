curl -XPOST https://auth.iudx.org.in/auth/v1/acl/append		\

	--cert certificate.pem --key private-key.pem		\

	-H 'content-type: application/json'			\

	-d '{"policy":"*@iisc.ac.in can access rs1.com/my-resource-name"}'