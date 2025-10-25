import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({allowedRole}){
    // const {auth} = useAuth();
    // const {role} = auth;
    const role = "user";
    if(role !== allowedRole){
        return <Navigate to='/login' replace/>
    }
    return <Outlet/>
}