import {BrowserRouter , Routes , Route } from "react-router-dom";
import {Home} from "./pages/home";
import { About } from "./pages/About";
import { Contact } from "./pages/contact";
import { Service } from "./pages/service";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";



const App = () => {
    return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/contact" element ={<Contact />} />
          <Route path="/service" element ={<Service />} />
          <Route path="/register" element ={<Register />} />
          <Route path="/login" element ={<Login />} />
        </Routes>
       <Footer/>
      
      </BrowserRouter>
    </>
    );   
};

export default App;