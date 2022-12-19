import { Outlet } from "react-router-dom";

export const InnerContent = () => {
    return (<>
            <div>
                <Outlet />
            </div>
    </>);
}