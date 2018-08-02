var Ravepay = require('ravepay');

var rave = new Ravepay("FLWPUBK-ed37f33389637585d29bca923fdf025d-X", 
"FLWSECK-b3312a2e24d5f17c13b58db2b8ce5e43-X",
 "false");

 var payload = {
    "cardno": "5438898014560229",
    "cvv": "789",
    "expirymonth": "07",
    "expiryyear": "18",
    "currency": "NGN",
    "pin": "7552",
    "country": "NG",
    "amount": "10",
    "email": "user@example.com",
    "phonenumber": "1234555",
    "suggested_auth": "PIN",
    "firstname": "user1",
    "lastname": "user2",
    "IP": "355426087298442",
    "txRef": "MC-7663-YU",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
};


console.log(rave.getIntegrityHash(payload));

rave.Misc.getBanks().then(resp => {
    console.log("got this response for banks: ", resp.body);
  });

  rave.Status.xrequery(payload)
.then(resp => {
    console.log(resp);
})
.catch(err => {

})