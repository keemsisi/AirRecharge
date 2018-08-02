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




var payload_card = {
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


//////////////////////////////////////////////////////////////////////////////
var payload_bank = {
    "accountnumber": "0690000004",
    "accountbank": "044",
    "currency": "NGN",
    "country": "NG",
    "amount": "10",
    "email": "user@example.com",
    "phonenumber": "1234555",
    "firstname": "first name",
    "lastname": "last name",
    "IP": "355426087298442",
    "txRef": "",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
};



var payload3 = {
    "accountnumber": "0690000004",
    "accountbank": "044",
    "currency": "NGN",
    "country": "NG",
    "amount": "10",
    "email": "user@example.com",
    "phonenumber": "08056552980",
    "firstname": "temi",
    "lastname": "desola",
    "IP": "355426087298442",
    "txRef": "",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
};

rave.Account.charge(payload3).then(resp => {
resp.body;
})
.catch(err => {
//Handle error
})
/////////////////////////////////////////////////////////////////////////////////////////////////




rave.Card.charge(payload).then(resp => {
//Get the ref of the card charge from response body. This will be used to validate the transaction
})
.catch(err => {
//Handle error
})


//On successful charge, validate the transaction to complete the payment

var payload = {
        "PBFPubKey": "FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X",
        "transaction_reference": ref,
        "otp": ""
        }
//We create a payload with public key, and transaction ref obtained from charge response.
rave.Card.validate(payload).then(resp => {
return resp.body;
})
.catch(err => {
//Handle error
})