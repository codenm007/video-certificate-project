const util = require('util');
const exec = util.promisify(require('child_process').exec);
// async function genrate_certificate() {
//   try {
//       const { stdout, stderr } = await exec('truffle migrate  --v_id "ssss" --v_title "sdsdsdds" --v_author "sdsdds" --v_timestamp "dssdasdads" --v_own_name "Nilanjan" --v_own_email "someone123@gmail.com" --v_own_user_id "123456789" -f 2 --network ropsten --reset');
//       console.log('stdout:', stdout,12);
//       console.log('stderr:', stderr,15);
//   }catch (err) {
//      console.error(err,18);
//   };
// };

exec('truffle migrate  --v_id "ssss" --v_title "sdsdsdds" --v_author "sdsdds" --v_timestamp "dssdasdads" --v_own_name "Nilanjan" --v_own_email "someone123@gmail.com" --v_own_user_id "123456789" -f 2 --network ropsten --reset').then(data =>{
    console.log(data.stdout.split('\n'));
}).catch(err => {
     console.log(err);
})


// module.exports = {
//     genrate_certificate
// }