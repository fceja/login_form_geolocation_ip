import { useAuth } from "@context/AuthContext";
import Geolocation from "@components/main/Geolocation";
import LoginForm from "@components/main/LoginForm";

export const MainPage = () => {
    const { isAuthd } = useAuth();

    return (
        <>{!isAuthd ? <LoginForm /> : <Geolocation />}</>
    )
}

export default MainPage