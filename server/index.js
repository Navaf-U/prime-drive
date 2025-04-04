import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/connectDB.js";
import publicRoutes from './routes/publicRoutes.js';
import manageError from "./middleware/

ManageError.js";
dotenv.config();
const app = express();

ConnectDB()

app.use(cors(
    {
        origin:process.env.CLIENT_URL,
        credentials:true    
    }
));

const PORT = process.env.PORT || 3000;
app.use(express.json());


app.use("/public",publicRoutes);

app.get("/", (req, res) => {
    res.send("Hello from server");
});

app.all("*",(req,res)=>{
    res.status(400).json({message:'cannot access the endpoint'})
  })

app.listen(PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});

app.use(manageError);