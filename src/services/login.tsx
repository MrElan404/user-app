import axios from 'axios';
import { LoginModel} from '../models/loginModel';
import staticText from './../staticData.json';
import Contextualizer from './contextualizer/Contextualizer';
import ProvidedServices from './contextualizer/ProvidedService';

export interface ILoginService {
    getLoginData(): Promise<LoginModel[]>
}

export const LoginServiceContext = Contextualizer.createContext(ProvidedServices.LoginService);

const LoginService = ({children}:any) => {
    const loginServices = {
        async getLoginData(): Promise<LoginModel[]> {
            return axios.get(staticText.LOGIN_API).then((res) => {
                return res.data
            })
        }
    }
    return ( 
        <>
            <LoginServiceContext.Provider value={loginServices}>
                {children}
            </LoginServiceContext.Provider>
        </>
    );
}

export default LoginService;

export const useLoginServicess = () => Contextualizer.Use<ILoginService>(ProvidedServices.LoginService);

// export const useLoginServicess = () => {
//     const context = useContext<ILoginService | undefined>(LoginServiceContext) 

//     if(context === undefined ) {
//         throw new Error(`LoginServiceProvider was not provided.
//             make sure your component is a child of the LoginService`)
//     }

//     return context;
// }


// class profile {
//     id: number | any
//     name!: string;
// }
// export class LoginService {
//     pf!: profile;
//     constructor(private login: profile) {
//         this.pf = this.login;
//     }

//     get getCookie() : string {
//         return "user";
//     }
// }