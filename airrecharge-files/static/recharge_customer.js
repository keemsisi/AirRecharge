
var API_publicKey = "FLWPUBK-ed37f33389637585d29bca923fdf025d-X" ; 
var customer_email = document.getElementById("#custormer_email"); 
var customer_email = document.getElementById("#amount"); 
var customer_email = document.getElementById("#customer_phone"); 
var customer_email = document.getElementById("#currency"); 
var customer_email = document.getElementById("#payment_method"); 
var customer_email = document.getElementById("#txref"); 
var customer_email = document.getElementById("#custormer_email"); 

function payWithRave() {
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: "user@example.com",
        amount: 2000,
        customer_phone: "234099940409",
        currency: "NGN",
        payment_method: "both",
        txref: "rave-123456",
        meta: [{
            metaname: "flightID",
            metavalue: "AP1234"
        }],
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect flwRef returned and pass to a 					server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}