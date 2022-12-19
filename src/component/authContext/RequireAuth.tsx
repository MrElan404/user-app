import { useAuth } from './AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = () => {

    const auth = useAuth();
    const authendicate = localStorage.getItem('authendicate');

    return authendicate !== null?<Outlet />:<Navigate to='/login' />;
}