import axios from "axios";
import { DeviceDetailsModel } from "../models/deviceDetailsModel";
import staticText from './../staticData.json';
import Contextualizer from "./contextualizer/Contextualizer";
import ProvidedServices from "./contextualizer/ProvidedService";

export interface IDeviceDetailsService {
    getDeviceDetailsData(): Promise<DeviceDetailsModel[]>
}

export const DeviceDetailsServiceContext = Contextualizer.createContext(ProvidedServices.DeviceDetailsService);

export const DeviceDetailsService = ({children}:any) => {

    const deviceDetailsServices = {
        async getDeviceDetailsData(): Promise<DeviceDetailsModel[]> {
            return axios.get(staticText.USER_DEVICE_DETAILS_API).then((res) => {
                return res.data.result;
            })
        }
    }

    return (<>
            <DeviceDetailsServiceContext.Provider value={deviceDetailsServices}>
                {children}
            </DeviceDetailsServiceContext.Provider>
        </>
    );
}

export const useDeviceDetails = () => Contextualizer.Use<IDeviceDetailsService>(ProvidedServices.DeviceDetailsService);

// export const useDeviceDetails = () => {
//     const context = useContext<IDeviceDetailsService | undefined>(DeviceDetailsServiceContext);

//     if(context === undefined ) {
//         throw new Error(`DeviceDetailsServiceProvider was not provided.
//         make sure your component is a child of the DeviceDetailsService`)
//     }

//     return context;
// }