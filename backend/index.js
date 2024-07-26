import express from 'express';
import coupons from './data/coupons.js'
import connectDB from './config/Db.js';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import couponRoutes from './routes/couponRoutes.js'
dotenv.config()
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import cors from 'cors'


connectDB()
const app=express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // URL of your frontend
  }));
app.use('/api/users',userRoutes);
app.use('/api/coupons',couponRoutes);

app.get('/',(req,res)=>{
    res.send("API is running...")
})
app.get('/api/coupons',(req,res)=>{
    res.send(coupons);
})
app.get('/api/coupons/:id',(req,res)=>{

    const coupon=coupons.filter((n)=>n.user===userId)
    res.send(coupon);
})
app.use(notFound);
app.use(errorHandler);
app.listen(5000,console.log("server is running at http://localhost:5000/"))