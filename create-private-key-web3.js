var CONWeb3 = require('web3');
const util = require('util') ;
var web3 = new CONWeb3("http://127.0.0.1:9971");
var Tx = require('ethereumjs-tx');
var coinbase = {};

coinbase.CreateAsset = function(_password, callback) {
    var CoinAddr = web3.eth.accounts.create(_password);
    var TokenAddr = web3.eth.accounts.create(_password);
    var assets = { CoinAddr, TokenAddr };
    console.log (JSON.stringify(assets, null, '\t')) ; 
    try {
        web3.eth.accounts.wallet.add(CoinAddr.privateKey);
        web3.eth.accounts.wallet.add(TokenAddr.privateKey);
        callback(null, assets);
        return true;
    } catch (e) {
        callback(e, null);
        callback("error : " + e, null);
        return error;
    }

}

coinbase.CreateAsset("jeffrey888" ,  function(err, tran_res) {

        // console.log ( JSON.stringify( tran_res , null, '\t')) ;
        console.log ( "======================== End =================" ) ;

})
