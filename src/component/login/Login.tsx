import { useEffect, useState } from 'react';
import { useAuth } from '../authContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { LoginModel } from '../../models/loginModel';
import { useLoginServicess } from '../../services/login';


export default function Login() {

    const auth = useAuth();
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [data, setData] = useState<LoginModel[]>([]);
    const navigate = useNavigate();
    const loginServices = useLoginServicess();


    useEffect(() => {
        loginServices.getLoginData().then((result) => {
            setData(result);
        }).catch(err => console.log(err))
    }, []);

    const handleLogin = () => {
        data.map((e) => {
            if (e.email === userEmail && e.password === userPass) {
                navigate('/home');
                auth.login(e.user_id);
                localStorage.setItem('authendicate', JSON.stringify(e.user_id));
            }
        });
    }

    return (
        <>
            <div className='login-page'>
                <div className="main">
                    <div className="card">
                        <h1>User Login</h1>
                        <form>
                            <div className="form-field">
                                <label>Email</label>
                                <input type="email" name="email" id="email" onChange={(e) => setUserEmail(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <label>Password</label>
                                <input type="password" name="password" id="password" onChange={(e) => setUserPass(e.target.value)} />
                            </div>
                            <button className='btn' onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}