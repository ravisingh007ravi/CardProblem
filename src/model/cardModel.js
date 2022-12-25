const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const CartSchema = new mongoose.Schema({

    cardNumber:{ type : String, trim : true },
    cardType:{ type : String, trim : true },
    customerName:{ type : String, require : true, trim : true },
    status:{ type : String, trim : true },
    vision:{ type : String, unique : true, trim : true },
    customerID:{ type : ObjectId, ref : "CustumerData", mandatory : true }

},{timestamps:true}
)

module.exports = mongoose.model('CartData',CartSchema);