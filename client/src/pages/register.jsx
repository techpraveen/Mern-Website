import {useState} from "react" ;
import { useNavigate } from "react-router-dom";

export const Register = () =>{

    const [user,setUser ] = useState({
        username:"",
        email:"",
        phone:"",
        password: "",
    });

    const navigate = useNavigate();

    // handling the input
    const handleInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
           ...user, //[...user ]The Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. It allows us the privilege to obtain a list of parameters from an array.
            [name]:value,
        });

    };
    //handling the form submission

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(user);

        try {
          
        const response = await  fetch(`http://localhost:5000/api/auth/register`, 
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(user),
        });
// agar sara data ok hai tu page pura phir refresh jaisa blank honjayega
        if(response.ok){
          alert("Registration Succesfully");

          const res_data = await response.json();
          localStorage.setItem("token" , res_data);


          setUser( {username:"",
          email:"",
          phone:"",
          password: ""
        })
          navigate('/login')
        };

        console.log(response);
      } catch (error) {
          
        console.log("register" , error);
      } 
    };

    return (
        <>
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
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
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
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
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
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
      

        </>
    )
};