const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    firstName:{ type : String, trim : true },
    lastName:{ type : String, trim : true },
    mobileNumber:{ type : String, require : true, trim : true },
    dOB:{ type : String, trim : true },
    emailID:{ type : String, unique : true, trim : true },
    address:{ type : String, require : true, trim : true },
    customerID:{ type:  String, require : true, trim : true },
    status:{ type : String, default : "INACTIVE", trim : true },

},{timestamps:true}
)

module.exports = mongoose.model('CustumerData',CustomerSchema);