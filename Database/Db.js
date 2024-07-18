import mongoose from "mongoose"

 const connectdb = async ()=>{
     try {
    const connectionInstance=await mongoose.connect(`mongodb+srv://yervala:Samanvith@cluster0.uwty7jj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
 console.log(`\n mongodb connected successfully !! DBHOST: ${connectionInstance.connection.host}`);
        
     } catch (error) {
         console.error("Failed to connect DB:", error)
         process.exit(1)
     }
 }
  export default connectdb