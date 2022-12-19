import { ProfileService } from "../profile";

const GlobalServices = ({ children }: any) => {
    return (
        <>
            <ProfileService>
                {children}
            </ProfileService>
        </>
    )
}

export default GlobalServices;