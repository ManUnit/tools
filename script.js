

function setmine () {
var delayInMilliseconds = 5000; //milisec
     setTimeout(function() {
        console.log ("\ntest dalay ") ;
     }, delayInMilliseconds);
   coinbase () ;
}

function now () {
  var Now = new Date(jsonDate); ;
  console.log ("\n Now the time is :  " + Now) ;
} 
function myLoop (i) {          
      console.log("") ;
      setTimeout(function () {   
      var Ran = Math.floor(Math.random() * eth.accounts.length + 1 ) - 1 ; 
      console.log ( "Set coinbase : " +  eth.accounts[Ran] );  //  your codehere                
      miner.setEtherbase(eth.accounts[Ran])
      if ( i == 1 ) i = 10  ;
      if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
   }, 10000)
}


function aveunlock () {
personal.unlockAccount("0x34d12c0d8c7d8b1a877b56f17d55ac8f5fcbcaf4","jeffrey888",500)

}




function chkgwei() {
 var i =0;
 eth.accounts.forEach
  (
    function(e)
     {
       console.log("  eth.accounts["+i+"]: " +
                      e + " \tbalance: " +
                      web3.fromWei(eth.getBalance(e), "gwei") +
                      " GAVE"
      );
       i++; }
 )
 };

function chketh() {
 var i =0;
 eth.accounts.forEach
  (
    function(e)
     {
       console.log("  eth.accounts["+i+"]: " +
                      e + " \tbalance: " +
                      web3.fromWei(eth.getBalance(e), "ether") +
                      " AVE"
      );
       i++; }
 )
  };

function getPeers() {
          console.log ('[');
          var n = admin.peers.length ;
          var commify = ','
          admin.peers.forEach( function(e) {
                      n-- ;
                      if( n == 0 ) {
                        commify = '' ;
                      }else {  commify = ','  } 
                      console.log( e.id +'@'+ e.network.remoteAddress.substring(0,e.network.remoteAddress.indexOf(':'))+commify ) ;
                       ;
                    }) 
          console.log (']');
}
// getPeers();
function getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber) {
  if (endBlockNumber == null) {
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 100 == 0) {
      console.log("Searching block " + i);
    }
    var block = eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
          console.log("  tx hash          : " + e.hash + "\n"
            + "   nonce           : " + e.nonce + "\n"
            + "   blockHash       : " + e.blockHash + "\n"
            + "   blockNumber     : " + e.blockNumber + "\n"
            + "   transactionIndex: " + e.transactionIndex + "\n"
            + "   from            : " + e.from + "\n"
            + "   to              : " + e.to + "\n"
            + "   value           : " + e.value + "\n"
            + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
            + "   gasPrice        : " + e.gasPrice + "\n"
            + "   gas             : " + e.gas + "\n"
            + "   input           : " + e.input) + "\n" ;
          console.log(" \t\t\t\t ____________ \n") ;
        }
      })
    }
  }
}
