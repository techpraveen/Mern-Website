const Contact = require("../models/contact-model");

const contactForm = async(req , res)=>{

    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"message send succesfully"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"message  is not send succesfully"});

        
    }
};
module.exports = contactForm;