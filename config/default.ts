export default {
    port: 1337,
    origin: 'http://localhost:3000',
    dbUri: "mongodb+srv://lamadb:lamadb@cluster0.14vxy.mongodb.net/typescript_rest_api?retryWrites=true&w=majority",
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjn6eIZ56u6m44aE+O7B2svXE7
hRFEaQ/0BAVtEtVmowtN01A8WxlW0T/K6/pwvdjdg2SQqX5bNWvg2Cgse4LaMgQW
Yf+WvqXLYnT82DUO6gNOsd7SLJEMLF5v8E+ev4p0vpMjBce15psjQjxHpzFDd72H
yf+rAmE8Imi5qndJ0QIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQCjn6eIZ56u6m44aE+O7B2svXE7hRFEaQ/0BAVtEtVmowtN01A8
WxlW0T/K6/pwvdjdg2SQqX5bNWvg2Cgse4LaMgQWYf+WvqXLYnT82DUO6gNOsd7S
LJEMLF5v8E+ev4p0vpMjBce15psjQjxHpzFDd72Hyf+rAmE8Imi5qndJ0QIDAQAB
AoGAUhhexG/JDFYPKzobAMizMuJyF7zyJvLX0ETcPBfA/pg7qbamgUHr+sVOTpAL
vdljH/E22eZQwY6SK+QIdBkcU3CjskVwGVR1ZHFed+DLohUby7bQH7ll/bZT4d0N
6XwMmduLAziiAEQ2KR6zHpaOA31chMM3sgsLQYvRhpg/TwkCQQD4Mn4x6LcmeWWv
JRc3QBiN/p5IbNxBhLqgORNQFkuz6lPYitzhj6n9bBeo3F6MxoIy/kaQUIo7lZqU
wIxt+/+vAkEAqMSCBZACLEMPtl9ZX1hgEGRJn8XmFhqKqKTKwEU7XMuqT1y5ZkbE
/+nyegdZZw1MahH/SPCf7BPUEoO05B4ufwJBAJ/tQT19m45SCQB7YOM8DNZqK6m1
Y5NgKDUXsecYBr2uj0pn5/376WgfX3tyTAZf3wNmrydMjlXoh0u0aohwKYcCQQCk
F/18Pxt9we7DGk6hwCIXjgtwCFHBaCkt9J0W+bnQbk64P6Yc5e6iDeyv7fllk66a
68jWOPCl8FmhbuIxc48tAkEApGLD4zWf5tN5aWm7erYd1hZI38CbA6l01BWcP+SL
vH1qHXhE5HmBS+KouvIH9RTUkBBFfDn1XoEiDfnKYcHHIA==
-----END RSA PRIVATE KEY-----`
};