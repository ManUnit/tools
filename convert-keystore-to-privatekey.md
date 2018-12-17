// convertkey.js 
var keythereum = require("keythereum");

var datadir = "/opt/Blockchain/node-datadir/";   // keystore directory under this

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

anan@BlockSlave:/opt/Blockchain/tools$ ls -al keystore/

total 16

drwxrwxr-x 2  4096 ธ.ค.  17 16:43 .

drwxr-xr-x 4  4096 ธ.ค.  17 16:42 ..

-rw------- 1   491 ธ.ค.  17 16:39 UTC--2018-12-17T09-39-00.856914473Z--891fc997a979288a4aebfcd26737e874150de48f

manunit@BlockSlave:/opt/Blockchain/tools$ 

 
