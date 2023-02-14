const mongoose=require('mongoose');



const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },

    address:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        required:true,
        trim:true
    },
    mobileNumber:{
        type:String,
        unique:true,
        required:true,
    
    },
    bloodGroup:{
        type:String
    }
});


// model creation
module.exports = mongoose.model('employees',employeeSchema);


