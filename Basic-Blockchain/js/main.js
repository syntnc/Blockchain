const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

let chatterjeeCoin = new Blockchain();
chatterjeeCoin.addBlock(new Block(1, "11/03/2018", { amount: 4 }));
chatterjeeCoin.addBlock(new Block(2, "18/03/2018", { amount: 10 }));

console.log(JSON.stringify(chatterjeeCoin, null, 4));
console.log(chatterjeeCoin.isChainValid());