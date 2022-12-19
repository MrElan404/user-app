import { useAuth } from './AuthContext';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Login from '../login/Login';


export const RequireLogout = () => {

    // const auth = useAuth();
    const navigate = useNavigate();
    const authendicate = localStorage.getItem('authendicate');
    
    if (authendicate !== null) {
        navigate('/login');
        return <Login />;
    } else {
        return <Outlet />
    };

}