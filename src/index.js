import dotenv from 'dotenv'
import connectDb from "./config/db.config.js";
import app from './app.js';

dotenv.config(
    {
        path: './env'
    }
);


const port = process.env.PORT || 3000; 

connectDb()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is listening at port ${port}`)
    })
})
.catch((error)=>{
    console.log(`MongoDb connection failed: ${error}`);
    throw error;
})