import { useContext } from "react"
import { GroupContext } from "../../Context/GroupContext";
import { UserContext } from "../../Context/UserContext"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Lesson from "../lessons/Lesson";
import axios from 'axios';
import { Loading } from "../Loading/Loading";
import { useState } from "react";

export const Home = () => {
    const { user } = useContext(UserContext)
    const { group, setGroup } = useContext(GroupContext)
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate();

    const getGroup = async () => {
        const group_id = user.group_id
        try {
            
            const response = await axios.get(`http://localhost:8080/api/user/getOneGroup/${group_id}`
            );
            const groupData = response.data
            setGroup(groupData)
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
               <Lesson></Lesson>
            )}
        </div>    
    )
}