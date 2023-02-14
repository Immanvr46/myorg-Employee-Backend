require('dotenv').config();
const express =require('express');
const db=require('./db/connect');
const cors=require('cors')
// import routes
const employeeRoutes=require('./routes/employees.routes');


const app=express();


// connecting db
db();

//  

app.get('/',(req,res)=>{
res.send('welcome to my MYORG');
})
 
// middleware
app.use(express.json());
app.use(cors());

// cors

// http://localhost:5000/api/employees
// http://example.com/api/employees
app.use('/api',employeeRoutes);


const PORT=process.env.PORT||4000;


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
     
});
