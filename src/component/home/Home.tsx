import './Home.css';
import user_icon from './../../asset/user_icon.png';
import weekly from './../../asset/weekly.png';
import progress from './../../asset/progress.png';
import progress2 from './../../asset/progress-2.png';
import details1 from './../../asset/details-1.png';
import details2 from './../../asset/detail-2.png';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="body">
                <div className='title'>
                    <h3>Personal Progress</h3>
                    <p>Welcome to User dashboard</p>
                </div>
                <div className='grid-sec'>
                    <div className="sec-1">
                        <img className='pro-icon' src={user_icon} alt="User Icon" />
                        <button className='profile_btn' onClick={() => navigate('/profile')}>View Profile</button>
                    </div>
                    <div className="sec-2">
                        <h3>Task Details</h3>
                        <div className="task">
                            <div className="pending-task">
                                <h3>20</h3>
                                <p>Pending</p>
                            </div>
                            <div className="completed-task">
                                <h3>25</h3>
                                <p>Completed</p>
                            </div>
                            <div className="total-task">
                                <h3>45</h3>
                                <p>Total</p>
                            </div>
                        </div>
                        <button className='profile_btn'>More Details</button>
                    </div>
                    <div className="sec-3">
                        <h3>Average</h3>
                        <p>3 Months result</p>
                        <h1>67%</h1>
                        <button className='profile_btn'>View Chart</button>
                    </div>
                    <div className="sec-4">
                        <h3>Details</h3>
                        <div className='details'>
                            <div className="img-1">
                                <img className='details-chart-1' src={details1} alt="details chart" />
                                <p>Amount</p>
                            </div>
                            <div className='img-2'>
                                <img className='details-chart-2' src={details2} alt="details chart" />
                                <p>Test</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-sec-2">
                    <div className="l2-sec-1">
                        <h3>Weekly goal achiveed</h3>
                        <img className='week-pie-chart' src={weekly} alt="Pie Chart" />
                        <span className='value'>56%</span>
                    </div>
                    <div className="l2-sec-2">
                        <h3>Progress Tracking</h3>
                        <div className='charts'>
                            <img className='progress-chart' src={progress} alt="progress-chart" />
                            <img className='progress-chart-2' src={progress2} alt="progress-chart" />
                            <span className='progress-value'>85%</span>
                        </div>
                    </div>
                    <div className="l2-sec-3">
                        <h3>Upcoming Task</h3>
                        <ul>
                            <li>Update to phase one</li>
                            <li>Develop start to CQI</li>
                            <li>Migrate to alter Lake</li>
                            <li>Improve UI features</li>
                        </ul>
                        <button className='profile_btn'>View More</button>
                    </div>
                </div>
            </div>
        </>
    );
}