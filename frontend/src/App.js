import {Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/Home'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Layout from './components/common/Layout'
import Coupons from './components/pages/coupons/Coupons';
import ViewCoupon from './components/pages/coupons/ViewCoupon';
import ExpiredCoupons from './components/pages/coupons/ExpiredCoupons';
import ActiveCoupons from './components/pages/coupons/ActiveCoupons';


function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/coupons' element={<Coupons/>}/>
          <Route path='/expired-coupons' element={<ExpiredCoupons/>}/>
          <Route path='/active-coupons' element={<ActiveCoupons/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/coupons/:id' element={<ViewCoupon/>}/>
      </Routes>
    </div>
  );
}

export default App;
