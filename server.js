require("dotenv").config();
const express = require('express');
const parser = require("body-parser");
const cors = require('cors');
const helmet = require("helmet");
const app = express();

//const User = require('./models/User')

//app.set("view engine","ejs")
 

const port = process.env.PORT || 3000


// using plugins
app.use(helmet());
app.use(cors());


// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
 
// parse application/json
app.use(parser.json());

//importing routes
const cert_route = require('./routers/certificates');

app.use('/certificate',cert_route);

app.all('*',(req,res)=>{
res.status(404).json({
    status:404,
    message:"Sorry folks ! this route does not exist !"
})
})


app.listen(port , ()=>{
    console.log(`Server is listening on ${port}`);
})
