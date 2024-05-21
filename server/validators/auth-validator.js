const {zod, z}= require("zod");

//creating an object schema

const signupSchema = z.object ({
    username: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 chars."})
    .max(255,{message:"Name ,ust be not more then 255 chars."}),

    email: z
    .string({ required_error: "Name is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Name must be atleast 3 chars."})
    .max(255,{message:"Name ,ust be not more then 255 chars."}),

    phone: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(10,{message:"Phone no. must be atleast  10 chars."})
    .max(20,{message:"Invalid"}),

    password: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(7,{message:"Password must be atleast 3 chars."})
    .max(1024,{message:"Name should be not more then 255 chars."})
});

module.exports = signupSchema ;