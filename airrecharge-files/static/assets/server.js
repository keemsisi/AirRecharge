"use strict";

const express = require('express');
const path = require("path");
const http_server = require("http");
const  Rave = require("ravepay");
var $ = require("jquery");
var connsction = require("mysql")

//testing credentials for the transaction 
const pbk = "FLWPUBK-ed37f33389637585d29bca923fdf025d-X"; //public key of the testing account
const scrk = "FLWSECK-b3312a2e24d5f17c13b58db2b8ce5e43-X"; //secrete key of the tesing account 
const production_url = "'https://ravesandboxapi.flutterwave.com'"; // not the true production URL ... a testing url



//list of banks 
var rave = new Rave(pbk , scrk , production_url);
rave.Misc.getBanks().then(resp => {
    console.log("got this response for banks: ", resp.body);
  });
  
let cardno                        = document.getElementById("#card-number"),
    card_cvv                      = document.getElementById("#card-cvv"),
    expire_month                  = document.getElementById("#expire-month"),
    expire_year                   = document.getElementById("#expire-year"),
    card_currency                 = document.getElementById("#card-currency"),
    card_pin                      = document.getElementById("#card-pin"),
    country                       = document.getElementById("#recharge-amount"),
    recharge_amount               = document.getElementById("#recharge-amount"),
    customer_email                = document.getElementById("#customer-email"),
    customer_phonenumber          = document.getElementById("#phone-number"),
    suggested_auth                = document.getElementById("#"),
    firstname                     = document.getElementById("#firstname"),
    lastname                      = document.getElementById("#lastname");
    //this part will get the device that initiated the transaction
const device_finger_print =new MediaDeviceInfo().deviceId ; 

var findIP = new Promise(
    r=>{var w=window,
    a=new (
        w.RTCPeerConnection||
        w.mozRTCPeerConnection||
        w.webkitRTCPeerConnection)({iceServers:[]}),
        b=()=>{};a.createDataChannel("");
        a.createOffer(c=>a.setLocalDescription(c,b,b),b);
        a.onicecandidate=c=>{
            try{
                c
                .candidate
                .candidate
                .match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)
            }
                catch(e){

                }
            }
        }
    );

//this part get the ip address of the user that is making the transaction
    findIP.then(ip_address => console.log('your ip: ', ip)).catch(e => console.error(e));






///////////payload

var payload = {
    "cardno": cardno,
    "cvv": card_cvv , 
    "expirymonth": expire_month ,
    "expiryyear": expire_year,
    "currency": card_currency,
    "pin": card_pin,
    "country": country,
    "amount": recharge_amount,
    "email": customer_email,
    "phonenumber": customer_phonenumber,
    "suggested_auth": card_pin,
    "firstname": custormer_firstname,
    "lastname": lastname,
    "IP": ip_address,
    "txRef": transaction_ref,
    "device_fingerprint": device_finger_print
};







rave.Account.charge()
rave.getIntegrityHash()
const fs = require("fs"); 


fs.readFile("./payment_form.html",function(error , html){
        if(error){
            throw error;
        }

        http_server.createServer((request , response)=>{
            response.writeHeader(200 , {"Content-Type":"text/html"});
            response.write(html);
            response.end();
        }).listen(8888);
        console.log("The server is listening on : "+8888);

});

function fetchtIPGeoLocation(){
    $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=<your_api_key>', function(data) {
  console.log(JSON.stringify(data, null, 2));
});
}