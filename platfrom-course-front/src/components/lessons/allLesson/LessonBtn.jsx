import "./LessonBtn.scss";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../Context/UserContext";
import { HmContext } from "../../../Context/HmContext";
import axios from 'axios';
import { apiHost } from "../../../apiHost";

export const LessonBtn = ({ lessonId, groupId }) => {
    const { user } = useContext(UserContext);
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
            lesson_number: lessonId,
            content: homeworkText
        }

        try {            
            const response = await axios.post(`${apiHost}user/sendHomework`, body );
            getHmUser()
        } catch (error) {
            console.error('Помилка при відправкі домашнього завдання', error.response); 
        }
    };

    const getHmUser = async () => {
        try {            
            const response = await axios.get(`${apiHost}teacher/getHomeworkByUserAndLessonAndGroup`, {
            params: { user_id: user.id, group_id: groupId, lesson_number: lessonId }
        });
            const goodHm = response.data
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
            const response = await axios.put(`${apiHost}user/editHomework`, body);
            getHmUser()
        } catch (error) {
            console.error('Помилка при редагування домашнього завдання', error.response); 
        }
        
    }
    


    useEffect(() => {       
        getHmUser()
    }, [lessonId, groupId]);



    return (
        <div className="hm">
            {hm && hm.map((hmData, index) => (
                <div key={index}>
                    <p className="hm__data__text">{hmData.content}</p>
                    <p className="hm__data__text">{hmData.instructor_feedback}</p>
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