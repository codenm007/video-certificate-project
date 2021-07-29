const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('./build/contracts/GenerateCertificate.json');
const address = '0xdf01FCe16B87b473eBE8c4CB73E5AA5B726072d8';
const privateKey = 'a098e03678f5fa8af01e7e5200dd65c3ae4c05728f6a001fc73c13b0465b6517';
const infuraUrl = 'https://ropsten.infura.io/v3/35fea77f231f4e3d9fa91f3b41ae89a2'; 


//Easy way (Web3 + @truffle/hdwallet-provider)
const init3 = async () => {
  const provider = new Provider(privateKey, infuraUrl); 
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    "0x9a17d60A18e58763D1732b959D93ECe60830b023"
  );

  myContract.methods.video_certificate().call().then(data =>{
    console.log(JSON.stringify(data));
  }).catch(err => {
    console.log(err);
  })

  //console.log(await myContract.methods.data());
  // console.log(`Old data value: ${await myContract.methods.data().call()}`);
  // const receipt = await myContract.methods.setData(3).send({ from: address });
  // console.log(`Transaction hash: ${receipt.transactionHash}`);
  // console.log(`New data value: ${await myContract.methods.data().call()}`);
}

init3();

