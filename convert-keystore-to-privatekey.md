// convertkey.js 
var keythereum = require("keythereum");

var datadir = "/opt/Blockchain/ICO-Node1/";

var address= "0x891fc997a979288a4aebfcd26737e874150de48f";

const password = "Mypassword";

console.log('====KEY======');

var keyObject = keythereum.importFromFile(address, datadir);

var privateKey = keythereum.recover(password, keyObject);

console.log(privateKey.toString('hex'));

// save  


linux-$  node  convert.js 

====KEY======
1aa0d2345454105de0db34afe47a9dac09b068b28552ffe423f28ab767e39429  



// Convert back to file //

echo   1aa0d2345454105de0db34afe47a9dac09b068b28552ffe423f28ab767e39429    > key.txt 

linux-$ geth --datadir  ./  account import key.txt  

Passphrase: Mypassword

Repeat passphrase:  Mypasswrd  

Address: {891fc997a979288a4aebfcd26737e874150de48f}

 
