const CardModel= require("../model/cardModel.js")

const createCard= async function(req,res){
    try{
        let data= req.body
        let createCard= await CardModel.create(data)
        return res.status(201).send({status:true,data:createCard})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }

    
}

//_________________________get Card data_____________________//

const getCardData= async function(req,res){
    try{
        let data= await CardModel.find()
        return res.status(200).send({status:true,data:data})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}


module.exports= {createCard,getCardData}