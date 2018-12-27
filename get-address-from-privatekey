var CONWeb3 = require('web3');
const util = require('util') ;
var web3 = new CONWeb3("http://127.0.0.1:9971");
var Tx = require('ethereumjs-tx');
var coinbase = {};

coinbase.CreateAsset = function(_prikey, callback) {
    
    var accountNumber = web3.eth.accounts.privateKeyToAccount(_prikey);
    console.log (JSON.stringify( accountNumber, null, '\t')) ; 
    callback ( 1, accountNumber ) 
    
}

coinbase.CreateAsset("0xbcd532310386df146ed1a91cc2416f2762dd327b36f69faaff48a4b90b465001" ,  function(err, tran_res) {

        // console.log ( JSON.stringify( tran_res , null, '\t')) ;
        console.log ( "======================== End =================" ) ;

})
