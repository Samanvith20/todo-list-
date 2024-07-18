import express from "express"; 

//setup for an Express.js server with middleware 
const app = express(); // Creating an instance of Express application

// import routes
import todoroutes from "../routes/todo routes.js";
//userRouter is just a variable name you choose to represent the router you imported from the user.routes.js file. 

//  routes  declaration
app.use("/api/v1/todos", todoroutes)