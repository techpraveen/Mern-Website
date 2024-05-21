require("dotenv").config();
const express = require ("express");
const app = express();
const cors =require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb =require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// lets tackle cors policy issue 
app.use(cors());

app.use(express.json());
//mount karna
app.use("/api/auth" , authRoute);
app.use("/api/Form" , contactRoute);

app.use(errorMiddleware);

const PORT = 8000;
connectDb().then(() =>{

    app.listen(PORT, ()=>{
        console.log(`server is running succesfully:${PORT}`);
    });
});
