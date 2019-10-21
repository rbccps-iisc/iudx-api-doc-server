curl -XPOST https://auth.iudx.org.in/auth/v1/revoke		\

--cert certificate.pem --key private-key.pem			\

-H 'content-type: application/json'				\

-d '{tokens:["auth.iudx.org.in/email-id@domain.com/2204adcbc990ffff234689aaabcdef90"]}'