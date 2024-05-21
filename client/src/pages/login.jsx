import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () =>{

    const [user ,setUser] = useState({
        email:"",
        password:"",
    });

    const navigate = useNavigate();

    const handleInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;

    
    setUser({
        ...user,
        [name]:value,
    });}

   const handleSubmit =async(e)=>{
    e.preventDefault();
    console.log(user);
    try {
      
    
    const response =  await fetch(`http://localhost:8000/api/auth/login` , {
      method: "POST",
      headers :{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user),
    })
    // agar sara data ok hai tu page pura phir refresh jaisa blank honjayega
    if (response.ok){
      alert("Login Succesfully");
      const res_data = await response.json();
      localStorage.setItem("token" , res_data.token);
      setUser ({ email:"",
      password:"",})

      navigate("/")
    }
    console.log(response);
     } catch (error) {
      
     }
    }


    return (
        <div>
            <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form><br /><br />
                <h2><i>New on my website</i></h2>
                <a href="/register"><button type="submit" className="btn secondary-btns">
                    Register Now
                  </button></a>

              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="footer-section">
            <div className="footer">
                <p>All Rights Reserverd @Praveen 2024</p>
            </div>
        </section>
        </div>
    )
};
