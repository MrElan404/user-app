import { useEffect, useState } from 'react';
import { DeviceDetailsModel } from '../../models/deviceDetailsModel';
import { useDeviceDetails } from '../../services/deviceDetails';
import './DeviceDetails.css';
import staticText from './../../staticData.json';



export const DeviceDetails = () => {

    const [data, setData] = useState<DeviceDetailsModel[]>([]);
    const [isLoading, setLoading] = useState(true);
    const deviceDetailsService = useDeviceDetails();

    useEffect(() => {
        deviceDetailsService.getDeviceDetailsData().then((res) => {
            setData(res)
            setLoading(false)
        }).catch(err => console.log(err))
    }, []);

    if(isLoading) {
       return <h3>{staticText.LoadingText}</h3>
    }

    return (
        <>
            <div className="device-page">
                <div className='device-content'>
                    <h3>Device Page</h3>
                    <p>User device model type</p>
                    <div className="device-card">
                        <h3>Device Models</h3>
                        <ul className='device-type' style={{listStyleType:'square'}}>
                            {data.map((e) => {
                                return <>
                                    <li>{e.type}</li>
                                </>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}