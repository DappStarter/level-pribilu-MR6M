require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strike decrease pitch essay hockey praise army gift'; 
let testAccounts = [
"0x03994c5ccb7709e2113d3abd866b787a2cd28ce7c99d9e0445d3fb5e1ccc8e23",
"0x2be40d4b3562b002526835fc707c77c3bf70e8570ab6705233d9652edb65c32a",
"0x9a0519a03a14528f5026906bd5e60cbfb9c56c1d94d157b5cf5ef78c1c513469",
"0x498222e771efd23729055e34b21738c06e3709d551331e9e65fc862da86d6f23",
"0x6f6227c8506b45eef944536961e246c5091204f9fe8098d51f1ae9e235b4f3aa",
"0xe8d404efb36af1052a4752e1584712e6747000a3a578af08b2d8eb31d2912485",
"0x11c7c3d11436b0e0d68d5bd5fdea7fce436d7c8496c278aedc21580b467b3323",
"0x42412948f024a6e87ce061c029c4e226809d59b64306db30bf294c8b6a0178b8",
"0x4dd5d1fb229692ee2b7bb0dff788a558a111bf22c5c892de4282cf68ae7a56a2",
"0x1485e4709d3fa6971dfaae9eb9c98c748f6a0cc37253e0142aeaf6833a5913a8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

