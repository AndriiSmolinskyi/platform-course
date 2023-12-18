import { useContext, useState } from "react"
import { GroupContext } from "../../../Context/GroupContext"
import { Loading } from "../../Loading/Loading";
import axios from 'axios';
import "../Teacher.scss";
import { apiHost } from "../../../apiHost";

export const Homeworks = () => {
    const { group } = useContext(GroupContext);
    const [ selectedGroup, setSelectedGroup ] = useState(null);
    const [ homeworkData, setHomeworkData ] = useState([]);
    const [ detailHm, setDetailHm ] = useState(null)
    const [ textareaValue, setTextareaValue ] = useState('');

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const handleGetGroupMember = async (group_id) => {
        try {
            const response = await axios.get(`${apiHost}teacher/getHomeworkByGroup/${group_id}`);
            const hmBack = response.data;
    
            // Сортування за номером уроку
            const sortedData = hmBack.sort((a, b) => a.lesson_number - b.lesson_number);
    
            // Сортування за статусом (спочатку 'no')
            const statusSortedData = sortedData.sort((a, b) => (a.status === 'no' ? -1 : 1));
    
            setHomeworkData(statusSortedData);
        } catch (error) {
            console.error("Error fetching group members:", error);
        }
    };

    const handleFeadback = async (hmId, text) => {
        try {
            const body = {
                id: hmId,
                instructor_feedback: text
            }
            const response = await axios.put(`${apiHost}teacher/editFeedback`, body);
            handleGetGroupMember(selectedGroup);
        } catch (error) {
            console.error("Error fetching group members:", error);
        }
    }

    const handleStatus = async (hmId) => {
        try {
            const body = {
                id: hmId,
                status: "done"
            }
            const response = await axios.put(`${apiHost}teacher/editStatus`, body);
            handleGetGroupMember(selectedGroup);
        } catch (error) {
            console.error("Error fetching group members:", error);
        }
    }

    const handleGroupChange = (event) => {
        const selectedGroupId = event.target.value;
        setSelectedGroup(selectedGroupId);
        handleGetGroupMember(selectedGroupId);
    };


    return(
        <div>
            <h1 className="teacher__title">Домашнє завдання</h1>
            {group ? (
                <select onChange={handleGroupChange} value={selectedGroup || ""} className="group__select select">
                    <option value={null} className="select__option">Обрати групу</option>
                    {group.map((groupItem) => (
                    <option key={groupItem.group_id} value={groupItem.group_id} className="select__option">
                        {groupItem.name_group}
                    </option>
                    ))}
                </select>
                ) : (
                <Loading></Loading>
            )}

            
            {homeworkData && (
                <div className="homework__data__block">
                    {homeworkData.map((member, index) => (
                        <div className="homework__bloc__wrapper" key={index}>
                            <div  className="homework__block" onClick={() => setDetailHm(index)}>
                                <p className="homework__block__item homework__lesson">{member.lesson_number}</p>
                                <p className="homework__block__item homework__name">{member.name} {member.surname}</p>
                                {member.status == "done" ? <p className="homework__block__item homework__status hm__done">Перевірено</p> : <p className="homework__block__item homework__status hm__no">Перевіряється</p>}    
                            </div>
                            {detailHm === index && (
                                <div className="reaction">
                                    <p className="reaction__text">Студент: {member.content}</p>
                                    <p className="reaction__text">Викладач: {member.instructor_feedback}</p>
                                    <textarea name="" id="" cols="30" rows="10"
                                        value={textareaValue}
                                        onChange={handleTextareaChange}
                                    ></textarea>
                                    <div className="teacher__hm__button" onClick={() => handleFeadback(member.id, textareaValue)}>
                                        Фідбек
                                    </div> 
                                    <div className="teacher__hm__button" onClick={() => handleStatus(member.id)}>
                                        Прийняти
                                    </div> 
                                </div>
                            )} 
                        </div>
                        
                    ))}
                    
                </div>
            )}
        </div>    
    )
}