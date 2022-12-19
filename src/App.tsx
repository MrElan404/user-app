import './App.css';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Home } from './component/home/Home';
import Login from './component/login/Login';
import { Profile } from './component/profile/Profile';
import { RequireAuth } from './component/authContext/RequireAuth';
import { DeviceDetails } from './component/deviceDetails/DeviceDetails';
import LoginService from './services/login';
import { DeviceDetailsService } from './services/deviceDetails';
import { InnerContent } from './component/home/InnerContent';
import { RequireLogout } from './component/authContext/RequireLogout';
import { Navbar } from './component/navbar/Navbar';
import { useEffect } from 'react';
import { useAuth } from './component/authContext/AuthContext';
import { SignUp } from './signUp/SignUp';
// import { Cookies } from 'react-cookie';



function App() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = window.location.pathname;
  // const localValue = localStorage.getItem('authendicate');
  const authendicate = localStorage.getItem('authendicate');
  // useEffect(()=> {
  //   if(authendicate === '0' || authendicate === null ) {
  //     navigate('/login')
  //   } else if(authendicate !== '0') {
  //     navigate('/');
  //   }
  // },[navigate]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<RequireAuth />}>
          <Route path='/' element={<InnerContent />}>
            <Route path='/' element={<Navigate replace to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/device-detail' element={<DeviceDetailsService><DeviceDetails /></DeviceDetailsService>} />
          </Route>
        </Route>
        <Route path='login' element={<RequireLogout />}>
          <Route path='/login' element={<LoginService><Login /></LoginService>} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
