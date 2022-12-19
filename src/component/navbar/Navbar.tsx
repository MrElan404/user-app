import { NavLink, useLocation } from "react-router-dom";
import './Navbar.css';
import { useAuth } from './../authContext/AuthContext';


export const Navbar = () => {

    const location = useLocation();
    const auth = useAuth();

    return (
        <>
            <nav>
                <ul className="nav-list">
                    {!auth.authenticate&&<li className="list-item"><NavLink to='/signup'>Sign Up</NavLink></li>}
                    {!auth.authenticate&&<li className="list-item"><NavLink to='/login'>Login</NavLink></li>}
                    <li className="list-item"><NavLink to='/home'>Home</NavLink></li>
                    {location.pathname === '/profile' &&<li className="list-item"><NavLink to='/profile'>Profile</NavLink></li>}
                    <li className="list-item"><NavLink to='/device-detail'>Device Detail</NavLink></li>
                </ul>
            </nav>
        </>
    );
}