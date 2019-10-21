curl -XPOST https://auth.iudx.org.in/auth/v1/group/list	\

--cert certificate.pem --key private-key.pem		\

-H 'content-type: application/json'			\

-d '{"group" : "confidential" }'