import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () => {
    const context = useContex(AuthContext);

    return context;
};

export default useAuth;