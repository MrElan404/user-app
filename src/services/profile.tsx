import axios from 'axios';
import { ProfileModel } from '../models/profileModel';
import staticText from './../staticData.json';
import Contextualizer from './contextualizer/Contextualizer';
import ProvidedServices from './contextualizer/ProvidedService';

export interface IProfileService {
    getProfileData(): Promise<ProfileModel[]>
}

export const ProfileServiceContext = Contextualizer.createContext(ProvidedServices.ProfileService);

export const ProfileService = ({children}:any) => {
    
    const profileServicess = {
        async getProfileData(): Promise<ProfileModel[]> {
            return axios.get(staticText.USER_DETAILS_API).then((res) => {
                return res.data
            })
        }
    }
    
    return (<>
            <ProfileServiceContext.Provider value={profileServicess}>
                {children}
            </ProfileServiceContext.Provider>
        </>);
}


export const useProfile = () => Contextualizer.Use<IProfileService>(ProvidedServices.ProfileService);

// export const useProfile = () => {
//      const context = useContext<IProfileService | undefined>(ProfileServiceContext) 

//     if(context === undefined ) {
//         throw new Error(`ProfileServiceProvider was not provided.
//             make sure your component is a child of the ProfileService`)
//     }

//     return context;
// }