require("dotenv").config();
const express = require("express");
const router = express.Router();

//importing controllers
const {generate_cert,get_certificate_details} = require("../controllers/generate_cert");

router.post('/generate_cert',generate_cert);

router.get('/get_cert_data/:cert_addr',get_certificate_details);


module.exports = router;