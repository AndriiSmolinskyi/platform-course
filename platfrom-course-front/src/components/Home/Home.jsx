import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Lesson from "../lessons/Lesson";
import axios from 'axios';

export const Home = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate();

    const getGroup = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/user/getOneGroup", {
                params: { group_id: user.group_id }
            });
            console.log(response);
        } catch (error) {
            console.error('Помилка при отриманні групи:', error.response); 
        }
    };
    
    useEffect(() => {     
       
        if (!user) {
            navigate('/');
        } else {
            getGroup();
        }
        
    
     
    }, [user, navigate]);

    return(
        <div>
            {user && (
                <>
                    {user.name}
                    {user.surname}
                    <Lesson />
                </>
            )}
        </div>    
    )
}