curl -XPOST https://auth.iudx.org.in/auth/v1/introspect	\

	--cert rs-certificate.key --key rs-private.key	\

	-H 'content-type: application/json'		\

	-d '{"token": "auth.iudx.org.in/arun.babu@rbccps.org/2204adcbc990ffff234689aaabcdef90"}'