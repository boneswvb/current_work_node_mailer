require("dotenv").config();

const express = require('express');

const router = express.Router();

// const sendEmailCustomerRawRoute = require('./emailDestinations/sendEmailCustomerRaw');
// const sendEmailCustomerRoute = require('./emailDestinations/sendEmailCustomer'); // use
// const sendEmailCustomerSuccessQuoteRoute = require('./emailDestinations/sendEmailCustomeSuccessQuote');
// const sendEmailCustomerSuccessBookRoute = require('./emailDestinations/sendEmailCustomeSuccessBook');
const sendEmailSupplierRoute = require('./emailDestinations/sendEmailSupplier');

// router.use('/sendEmailCustomerRaw', sendEmailCustomerRawRoute)
// router.use('/sendEmailCustomer', sendEmailCustomerRoute) // use
// router.use('/sendEmailCustomeSuccessQuote', sendEmailCustomerSuccessQuoteRoute)
// router.use('/sendEmailCustomeSuccessBook', sendEmailCustomerSuccessBookRoute)
router.use('/sendEmailSupplier', sendEmailSupplierRoute)

module.exports = router;
