import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Auth token state
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    
    const login = async (data) => {
        try {
            const res = await axios.post(import.meta.env.VITE_BACKEND_URI + "/user/login", data, { withCredentials: true });
            console.log(res)
            if (res.data.success) {
                setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                toast.success(res.data.message);
                navigate("/dashboard");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    // Logout function
    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
        toast.info("Logged out successfully");
        navigate("/login");
    };

    const value = {
        token,
        setToken,
        login,
        logout,
        navigate,
        // add other state and functions here as needed
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
