import "./LessonBtn.scss";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../Context/UserContext";
import { GroupContext } from "../../../Context/GroupContext";
import { HmContext } from "../../../Context/HmContext";
import axios from 'axios';

export const LessonBtn = ({ hmId, groupId }) => {
    const { user } = useContext(UserContext);
    const { group } = useContext(GroupContext);
    const { hm, setHm } = useContext(HmContext);
    const [ homeworkText, setHomeworkText] = useState(""); // Стан для зберігання тексту домашнього завдання
    const [ error, setError ] = useState(""); // Стан для відображення помилок валідації

    const handleTextareaChange = (event) => {
        setHomeworkText(event.target.value);
        setError(""); // Скидання помилок при зміні тексту
    };

    const handleSubmit = () => {
        if (homeworkText.trim() === "") {
        setError("Поле не може бути порожнім");
        } else {
            sendHm()
        setHomeworkText("");
        setError("");
        }
    };

    const sendHm = async () => {
        const body = {
            user_id: user.id,
            group_id: groupId,
            lesson_number: hmId,
            content: homeworkText
        }

        try {            
            const response = await axios.post(`http://localhost:8080/api/user/sendHomework`, body );
            console.log(response.data)
            getHmUser()
        } catch (error) {
            console.error('Помилка при відправкі домашнього завдання', error.response); 
        }
    };

    const getHmUser = async () => {
        try {            
            const response = await axios.get(`http://localhost:8080/api/teacher/getHomeworkByUserAndLessonAndGroup`, {
            params: { user_id: user.id, group_id: groupId, lesson_number: hmId }
        });
            const goodHm = response.data
            console.log(response.data, 'hello')
            setHm(goodHm)
        } catch (error) {
            console.error('Помилка при відправкі домашнього завдання', error.response); 
        }
    };


    const handleEditHomework = async () =>{
        const body = {
            id: hm[0].id,
            content: homeworkText
        }
        console.log(homeworkText)
        try {            
            const response = await axios.put(`http://localhost:8080/api/user/editHomework`, body);
            console.log(response.data, 'bye')
            getHmUser()
        } catch (error) {
            console.error('Помилка при редагування домашнього завдання', error.response); 
        }
        
    }
    


    useEffect(() => {       
        getHmUser()
    }, [hmId, groupId]);



    return (
        <div className="hm">
            {hm && hm.map((hmData, index) => (
                <div key={index}>
                    <p>{hmData.content}</p>
                    <p>{hmData.instructor_feedback}</p>
                </div>
            ))}
            <textarea
                value={homeworkText}
                onChange={handleTextareaChange}
                cols="30"
                rows="10"
            ></textarea>
            {error && <p className="error">{error}</p>}
            
            {hm && hm.length > 0 ? 
                <div className="button" onClick={handleEditHomework}>
                    Edit Homework
                </div> 
                : 
                <div className="button" onClick={handleSubmit}>
                    Send Homework
                </div>
            }
            
            
        </div>
    );
};