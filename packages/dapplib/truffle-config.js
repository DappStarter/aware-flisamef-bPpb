require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture roast frame ski stool curtain place history hope clinic metal gift'; 
let testAccounts = [
"0x618614763aa13c5ee4e1f7fac2367be7c7e34d9eeeadb44cb8a05787b352a5ee",
"0x9ccc0ad24699a3b1ba03deb58cee3b2c5d275ca2df837626e078e845ab8a5d21",
"0x316a3702ea7e2715bb99d8bb12b8ef3e4a764adf9b427fc275ca45c0a9766388",
"0x815d9eb498644fd5aca770b5f31c114c42b824be9d85c8b1ca1e8564187aad5f",
"0xc25ce1f8886c990ed647be6e73a1a7c4f1bb7876746bb80357c91ee345e91f6c",
"0x660d24d6a1b9341387c7bc5fc741a1c301245fd8b8a6b1f5131d157dc4102a1e",
"0x7bb3155a0597dee9be9f2e583c07f568eba8ad58b848c85fdf55be6cfa85fc72",
"0x2fa2da663b889d00ab9dc77d3b3879423e849a7bbe2948b433b2e8835254121f",
"0x3460e276e7b3f712702f5a8c9a643c3bc49d57b0300d5ec7fb763fd39137912b",
"0x8cf0c71eef79c1f31fae9fc4c9fe76619811fe93f827ff7061edd5f1663157a6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


