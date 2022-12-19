import { useEffect, useState } from 'react';
import { useAuth } from '../authContext/AuthContext';
import user_icon from './../../asset/user_icon.png';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { useProfile } from '../../services/profile';
import { ProfileModel } from '../../models/profileModel';
import { Cookies } from 'react-cookie';

export const Profile = () => {

    const [data, setData] = useState<ProfileModel[]>([]);
    const auth = useAuth();
    const navigate = useNavigate();
    const profile = useProfile();
    const cookies = new Cookies();

    useEffect(() => {
        profile.getProfileData().then((result) => {
            setData(result);
        })
    }, [profile]);

    const handlelogout = () => {
        auth.logout();
        navigate('/login');
        localStorage.removeItem('authendicate');
    }

    return (
        <>
            <div className='pro-page'>
                <div className="content">
                    <div className="user-card">
                        <img className='user-icon' src={user_icon} alt="user_img" />
                        <div className='detail-list'>
                            <ul>
                                {data.map((e) => {
                                    if (e.user_id === auth.user) {
                                        return <>
                                            <li>Name: {e.name}</li>
                                            <li>Age: {e.age}</li>
                                            <li>Email: {e.email}</li>
                                            <li>Mobile: {e.mobile}</li>
                                            <li>Address: {e.address}</li>
                                        </>
                                    }
                                })}
                            </ul>
                        </div>
                        <button onClick={handlelogout} className="logout-btn">Logout</button>
                    </div>
                </div>
            </div>
        </>
    );
}