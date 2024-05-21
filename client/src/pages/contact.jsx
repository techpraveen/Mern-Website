import React from "react";
import { useState } from "react";
export const Contact = () =>{

  const [contact , setContact] = useState({
    username:"",
    email:"" ,
    message:""

  });

  const handleInput = (e)=>{
    const name =e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async()=>{
    e.preventDefault();

    console.log(contact);
    try {
      
    

    const response =await frtch(`http://localhost:5000/api/Form/Contact` , {
      method:"POST" ,
      headers:
     { "Content-Type":"application/json"},
     body:JSON.stringify(user),
    })
if(response.ok){
  setUser({
    username:"",
    email:"" ,
    message:""

  });
}
    console.log(response);
  } catch (error) {
      
  }

  }
    return(
        <div>
             <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-image">
          <img src="/images/support.png" alt="" width="500" height="500"  />
          </div>
        
            <section className="section-form">
            <form onSubmit={handleSubmit} >
            
              <div>
                <label htmlFor="username">Username</label>
                <input
                 type="text"
                 name="username" 
                 placeholder="Enter your username"
                 id="username"
                 value={contact.username}
                 onChange={handleInput} />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                 type="email"
                 name="email" 
                 placeholder="Enter your email"
                 id="email"
                 value={contact.email}
                 onChange={handleInput} />
              </div>
              <div>
              <label htmlFor="message">Message</label>
              </div>
              <div>
               <textarea
                 name="message"
                  id="textarea"
                   cols="30"
                    rows="6"
                    value={contact.message}
                     onChange={handleInput}>
                </textarea>
                </div>
                <br />
                <div>
                <button type="submit" className="btn btn-submit">Submit</button>
                </div>
            </form>
            </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.321353948189!2d83.3855258!3d26.73411939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39914354e5db8d09%3A0xe072a56d1e321e13!2sU.F.I.%20Self%20Study%20Point(Library)!5e0!3m2!1sen!2sin!4v1710308350009!5m2!1sen!2sin"            
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
            </section>
            <section className="footer-section">
            <div className="footer">
                <p>All Rights Reserverd @Praveen 2024</p>
            </div>
        </section>
        </div>
    );
};