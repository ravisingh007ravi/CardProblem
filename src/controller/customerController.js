const { model } = require('mongoose');
const CustomerModel = require('../model/customerModel.js');

const getCustomerData = async (req,res) =>{
    try{
        
        const getData = await CustomerModel.find({status:"ACTIVE"})

        res.status(200).send({ status: true, data: getData });

    }
    catch(err) {res.status(500).send({status:false,message:err.message})}

}

const deleteCustomerData = async (req,res) =>{
    try{
    let CustomerId= req.params.CustomerId
        let check= await CustomerModel.findOne({_id:CustomerId,isDeleted:false})
        if(check==null){
            return res.status(400).send({status:false,message:"request is not correct"})

        }

        let deleteData= await CustomerModel.findOneAndUpdate({_id:CustomerId},{isDeleted:true,deletedAt:Date.now()},{new:true})
        return res.status(200).send({status:true,data:deleteData})

    }
    catch(err){return res.status(500).send({status:false,message:err.message})}

}

const createCustomerData = async (req,res) =>{
    try{
        const data =  req.body;

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "please input some data" });

        const { firstName,lastName,mobileNumber,dOB,emailID,address,customerID,status} = data;

        if(!firstName) return res.status(400).send({ status: false, message: "please Provide First Name" });

        if(!lastName) return res.status(400).send({ status: false, message: "please Provide last Name" });

        if(!mobileNumber) return res.status(400).send({ status: false, message: "please Provide Mobile Number" });

        if(!dOB) return res.status(400).send({ status: false, message: "please Provide Date Of Birth" });

        if(!emailID) return res.status(400).send({ status: false, message: "please Provide EmailId" });

        const present = await CustomerModel.findOne({emailID:emailID});
        if(present) return res.status(400).send({ status: false, message: "Customer Already Register" });


        if(!address) return res.status(400).send({ status: false, message: "please Provide Address" });

        if(!customerID) return res.status(400).send({ status: false, message: "please Provide Customer Id" });

        if(!status) return res.status(400).send({ status: false, message: "please Provide Satus" });

        const createdata = await CustomerModel.create(data);

        res.status(201).send({ status: true, data: createdata });




    }
    catch(err) {res.status(500).send({status:false,message:err.message})}

}


module.exports = { getCustomerData, deleteCustomerData, createCustomerData }