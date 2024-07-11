import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

export const Header = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate();

    const handleUserPage = () => {
        navigate('/userPage')   
    }
    
    const handleCabinetTeacher = () => {
        navigate('/teacher')   
    }

    return(
        <div className="conteiner">
            <div className="header">
                <div className="header__left header__item">
                    4min-IT
                </div>
                <div className="header__right header__item">       
                    {user?.role === "teacher" && <span className="cab__teacher" onClick={handleCabinetTeacher}>Кабінет викладача</span>}
                    <FontAwesomeIcon icon={faUser} className="header__right__icon" onClick={handleUserPage}/>
                </div>
            </div>   
        </div>
         
    )
}