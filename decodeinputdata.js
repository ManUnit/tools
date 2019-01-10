const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder(`${__dirname}/Transfer.abi`);
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9971"));

txHash = '0xbde216ff3d63c7e54b3dcd7d55e44c5f1a1cdcff919427fe30da6f49f6a9cc11' ;


var ethTx = (txHash);

        web3.eth.getTransaction(ethTx, function(err, result) {
                        if (!err) {
                                                console.log('From Address: ' + result.from);
                                                console.log('To Address: ' + result.to);
                                                console.log('Coin Transacted: ' + (web3.utils.fromWei(result.value, 'ether')) + " GDT" );
                                                console.log('input data :' + result.input);
                                                const textout = decoder.decodeData(result.input);
                                                console.log ("=========decode input data with abi=======") ;
                                                console.log(textout);
                                        }
                        else {
                                                console.log('Error!', err);
                                        }
        });
