import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    const handleUserPage = () => {
        navigate('/userPage')   
    }

    return(
        <div className="conteiner">
            <div className="header">
                <div className="header__left header__item">
                    4min-IT
                </div>
                <div className="header__right header__item">
                    <FontAwesomeIcon icon={faUser} className="header__right__icon" onClick={handleUserPage}/>
                </div>
            </div>   
        </div>
         
    )
}