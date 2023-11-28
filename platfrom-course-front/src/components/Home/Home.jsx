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
        const user_id = user.id
        try {
            
            const response = await axios.get(`http://localhost:8080/api/user/getUsersGroups/${user_id}`
            );
            const groupData = response.data
            console.log(response.data)
            setGroup(groupData)
            setLoading(true)
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

    if (loading === true) {
        return (
            <div>
                <Lesson></Lesson>
            </div>
        );
    } else {
        return <Loading></Loading>;
    }

}