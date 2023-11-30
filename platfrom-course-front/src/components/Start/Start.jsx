import { NavLink } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import "./Start.scss";
import logo from "../logo.svg"
import { Loading } from "../Loading/Loading";

export const Start = () =>{
    const navigation = useNavigate()
    const oldToken = localStorage.getItem('userToken')
    const { setUser} = useContext(UserContext)
    const [ loading, setLoading ] = useState(false)

    const autoLogin = async () => {

        if(oldToken != null && oldToken !== undefined){
            try {
                const response = await axios.put("http://localhost:8080/api/user/autoLogin", { token: oldToken });
                console.log('good')
                const newToken = response.data.token
                const newUser = response.data
                console.log(newUser)
                setUser(newUser)
                localStorage.setItem('userToken', newToken)
                navigation('/home')
            } catch (error) {
                console.error('Помилка при авторизації:', error.response.data); // Змінено
            }
        }    
        setLoading(true)
    };

    useEffect(() => {
        autoLogin();
    }, []);

    
    
        return(
            <div className="start-bg">
                {loading ?
                    <div className="start">
                    <div className="start__left">
                        <img src={logo} alt="" className="logo"/>
                        <h1 className="start__logo">Вітаємо в LMS 4min-IT!</h1>
                        <p className="start__par">Вітаємо на нашій платформі. Бажаємо вам легкого та продуктивного навчання в дружній атмосфері.</p>
                    </div>
                    <div className="start__right">
                        <NavLink to="/login" className="start__btn">Ввійти в акаунт</NavLink>
                        <NavLink to="/register" className="start__btn">Реєстрація</NavLink>
                    </div>
                    </div>  
                    : <Loading></Loading>
                } 
            </div>
      
        )
}
