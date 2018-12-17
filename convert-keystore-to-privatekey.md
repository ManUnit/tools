var keythereum = require("keythereum");

var datadir = "/opt/Blockchain/ICO-Node1/";

var address= "0x891fc997a979288a4aebfcd26737e874150de48f";

const password = "jeffrey999";

console.log('====KEY======');


var keyObject = keythereum.importFromFile(address, datadir);

var privateKey = keythereum.recover(password, keyObject);

console.log(privateKey.toString('hex'));
