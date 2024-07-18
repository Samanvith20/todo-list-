import connectdb from "./Database/Db.js";
import express from "express";
import todoroutes from "../Backend/routes/todo routes.js";
import cors from "cors"; 


const app=express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000/", 
    credentials: true 
}));
app.use("/api/v1/todos", todoroutes);

connectdb()
.then(()=>{
    app.listen( 8000, () => {
        console.log(`⚙️ Server is running at port :8000`);
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed !!! ", error);
})