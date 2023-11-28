import "./LessonBtn.scss";
import { useContext, useState } from "react";
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


    const sendHm = async (body) => {
        try {            
            const response = await axios.post(`http://localhost:8080/api/user/sendHomework`, body, { withCredentials: true });
            console.log(response.data)
        } catch (error) {
            console.error('Помилка при отриманні групи:', error.response); 
        }
    };

    const handleSubmit = () => {
        if (homeworkText.trim() === "") {
        setError("Поле не може бути порожнім");
        } else {
            const body = {
                user_id: user.id,
                group_id: groupId,
                lesson_number: hmId,
                content: homeworkText
            }
            console.log(body)
            sendHm(body)
        setHomeworkText("");
        setError("");
        }
    };

    return (
        <div className="hm">
            <textarea
                value={homeworkText}
                onChange={handleTextareaChange}
                cols="30"
                rows="10"
            ></textarea>
            {error && <p className="error">{error}</p>}
            <div className="button" onClick={handleSubmit}>
                Send Homework
            </div>
        </div>
    );
};