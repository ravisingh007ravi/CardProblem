//<----------------------< Importing : Packages >---------------------->//
const express = require('express');
const router = express.Router();
const { getCustomerData, deleteCustomerData, createCustomerData } = require('../controller/customerController.js');
const {createCard,getCardData} =require('../controller/cardController.js')

//Get all customers List with status ACTIVE [GET]
router.get('/GetAllCustomers',getCustomerData);
//Delete customer. [DELETE]
router.delete('/DeleteCustomer/:CustomerId',deleteCustomerData);
//Create new customer [POST]
router.post('/CreateCustomers',createCustomerData);


// Get all Card List[GET]
router.get('/GetCardData',getCardData);
// Create new card [POST]
router.post('/CreateCard',createCard);





//<----------------------< Check All API Path >---------------------------->//
router.all('/*', (req,res) =>{
    return res.status(400).send({status:false,message:"Given path are not found !!!"})
});



module.exports = router;