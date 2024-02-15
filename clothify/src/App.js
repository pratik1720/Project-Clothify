import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import ForgetPass from './Components/ForgetPass';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutus from './Components/AboutUs';
import Order from './Components/Order';
import Contact from './Components/Contact';
import UserProfile from './Components/UserProfile';
import ChangePassword from './Components/ChangePassword';
import SingOut from './Components/SignOut';
import DashBoard from './Components/DashBoard';

import PickUpPersonLogin from './Components/PickUpPersonLogin';
import PickUpPerson from './Components/PickUpPerson';
import Coupons from './Components/Coupons';
import AllotedCoupons from './Components/AllocatedCoupons';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (<div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/registration" element={<Register/>} />
    <Route path="/forgetpassword" element={<ForgetPass/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<Aboutus/>} />
    <Route path="/order" element={<Order/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/profile" element={<UserProfile/>} />
    <Route path="/changePassword" element={<ChangePassword/>} />
    <Route path="/signout" element={<SingOut/>} />
    <Route path="/dashBoard" element={<DashBoard/>} />
    <Route path="/pickupPersonLogin" element={<PickUpPersonLogin/>}  />
    <Route path="/pickupPerson" element={<PickUpPerson/>}  />
    <Route path="/coupons" element={<Coupons/>}  />
    <Route path="/allocatedCoupons" element={<AllotedCoupons/>}  />
  </Routes>
  <Footer></Footer>
  </BrowserRouter>
    </div>);
}

export default App;
