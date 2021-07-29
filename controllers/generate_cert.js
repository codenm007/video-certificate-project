const util = require("util");
const exec = util.promisify(require("child_process").exec);
const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('../build/contracts/GenerateCertificate.json');
const address = '0xdf01FCe16B87b473eBE8c4CB73E5AA5B726072d8';
const privateKey = 'a098e03678f5fa8af01e7e5200dd65c3ae4c05728f6a001fc73c13b0465b6517';
const infuraUrl = 'https://ropsten.infura.io/v3/35fea77f231f4e3d9fa91f3b41ae89a2'; 

const generate_cert = async (req, res, next) => {
  //on callback function should be written
  //by defualt passing only a demo info
  const {
    v_id,
    v_title,
    v_author,
    v_timestamp,
    v_own_name,
    v_own_email,
    v_own_user_id,
  } = req.body;

  exec(
    `truffle migrate  --v_id "${v_id}" --v_title "${v_title}" --v_author "${v_author}" --v_timestamp "${v_timestamp}" --v_own_name "${v_own_name}" --v_own_email "${v_own_email}" --v_own_user_id "${v_own_user_id}" -f 2 --network ropsten --reset`
  )
    .then((data) => {
      console.log(data.stdout.split("\n"));
      return res.status(200).json({
        status: 200,
        message: "Certificate added to blockchain sucessfully",
        data:data.stdout.split("\n")
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
          status:500,
          message:"Error adding certificate"
      })
    });

};

const get_certificate_details = async(req,res,next) =>{

    const {cert_addr} = req.params;
   // console.log(cert_addr);

    const provider = new Provider(privateKey, infuraUrl); 
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const myContract = new web3.eth.Contract(
      MyContract.abi,
      cert_addr
    );
  
    myContract.methods.video_certificate().call().then(data =>{
        myContract.methods.video_owner().call().then(own_data =>{
            return res.status(200).json({
                status: 200,
                message: "Certificate data fetched from blockchain sucessfully",
                video_data:data,
                owner_data:own_data
              });
        }).catch(err =>{
            return res.status(400).json({
                status: 400,
                message: "Certificate data fetched from blockchain sucessfully",
                video_data:"",
                owner_data:""
              });

        })
    }).catch(err => {
        return res.status(400).json({
            status: 400,
            message: "Certificate data fetched from blockchain sucessfully",
            video_data:"",
            owner_data:""
          });
    })
}

module.exports = {
  generate_cert,
  get_certificate_details
};
