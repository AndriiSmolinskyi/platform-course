import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Lesson from "../lessons/Lesson";

export const Home = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate();
 
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    return(
        <div>
            {user && (
                <>
                    {user.name}
                    <br />
                    {user.surname}
                    <Lesson />
                </>
            )}
        </div>    
    )
}