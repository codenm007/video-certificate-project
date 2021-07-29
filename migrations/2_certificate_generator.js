const Gen_Cert = artifacts.require("./GenerateCertificate.sol");
const argv = require('minimist')(process.argv.slice(2), {string: ['v_id','v_title','v_author','v_timestamp','v_own_name','v_own_email','v_own_user_id']});

const {v_id,v_title,v_author,v_timestamp,v_own_name,v_own_email,v_own_user_id}= argv;

module.exports = async function(deployer) {
  //console.log("----migration custom argument: ",v_id,v_own_email);
  deployer.deploy(Gen_Cert,v_id,v_title,v_author,v_timestamp,v_own_name,v_own_email,v_own_user_id);
}