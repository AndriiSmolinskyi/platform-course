import { NavLink } from "react-router-dom"
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

export const Start = () =>{
    const navigation = useNavigate()
    const oldToken = localStorage.getItem('userToken')
    const { setUser} = useContext(UserContext)

    const autoLogin = async () => {

        if(oldToken != null || oldToken !== undefined){
            try {
                const response = await axios.put("http://localhost:8080/api/user/autoLogin", { token: oldToken });
                console.log("auto-login good");
                const newToken = response.data.token
                const newUser = response.data
                setUser(newUser)
                localStorage.setItem('userToken', newToken)
                navigation('/home')
            } catch (error) {
                console.error('Помилка при авторизації:', error.response.data); // Змінено
            }
        }    
    };

    useEffect(() => {
        autoLogin();
    }, [oldToken]);

    return(
        <div>
            <NavLink to="/register">register</NavLink>
            <NavLink to="/login">login</NavLink>
        </div>    
    )
}
