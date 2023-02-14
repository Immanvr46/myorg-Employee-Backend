const mongoose=require('mongoose');

const db = async () =>{ 
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connnection established')
       }catch(error){
        console.log('DB Error:',error);
    }

};



module.exports=db;