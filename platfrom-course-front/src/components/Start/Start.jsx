import { NavLink } from "react-router-dom"
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Start = () =>{
    const navigation = useNavigate()
    const oldToken = localStorage.getItem('userToken')
    console.log(oldToken)

    const autoLogin = async () => {

        if(oldToken != null || oldToken !== undefined){
            try {
                const response = await axios.put("http://localhost:8080/api/user/autoLogin", { token: oldToken });
                console.log(response.data, "auto-login good");
                localStorage.setItem('userToken', response.user.token)
                navigation('/home')
            } catch (error) {
                console.error('Помилка при авторизації:', error.response.data); // Змінено
            }
        }    
    };

    useEffect(() => {
        autoLogin();
    }, []);

    return(
        <div>
            <NavLink to="/register">register</NavLink>
            <NavLink to="/login">login</NavLink>
        </div>    
    )
}
