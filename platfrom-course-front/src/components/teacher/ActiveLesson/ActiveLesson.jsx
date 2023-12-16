import { useContext, useState } from "react";
import { GroupContext } from "../../../Context/GroupContext";
import { Loading } from "../../Loading/Loading";
import axios from 'axios';
import "../Teacher.scss";
import { apiHost } from "../../../apiHost";

export const ActiveLesson = () => {
    const { group, setGroup } = useContext(GroupContext);
    const [ selectedGroup, setSelectedGroup ] = useState(null);
    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    

    const handleLessonChange = (event) => {
        const selectedGroupId = event.target.value;
        const selectedGroupObject = group.find(groupItem => groupItem.group_id === parseInt(selectedGroupId, 10));
        setSelectedGroup(selectedGroupObject);
    };

    const updateGroupLessons = async () => {
        const body = {
            id: selectedGroup.group_id,
            available_lessons: inputValue
        }
        try {
            const update = await axios.put(`${apiHost}admin/updateGroupLesson`, body);
            setSelectedGroup(prevGroup => ({
                ...prevGroup,
                available_lessons: inputValue
            }));
        } catch (error) {
            console.error("Error fetching group members:", error);
        }
    }

    return (
        <div>
            <h1 className="teacher__title">Відкриті уроки</h1>
            {group ? (
                <select onChange={handleLessonChange} value={selectedGroup ? selectedGroup.group_id : ""} className="group__select select">
                    <option value={null} className="select__option">Обрати групу</option>
                    {group.map((groupItem) => (
                        <option key={groupItem.group_id} value={groupItem.group_id} className="select__option">
                            {groupItem.name_group}
                        </option>
                    ))}
                </select>
            ) : (
                <Loading />
            )}

            {selectedGroup && (
                <div className="groupName__block">
                    <p className="groupName__block__title">Доступні уроки для групи {selectedGroup.name_group}:</p>
                    <p className="groupName__block__text">Кількість доступних уроків: {selectedGroup.available_lessons}</p>
                    <div className="avai__form">
                        <input type="text" value={inputValue} onChange={handleInputChange} className="avai__input"/>
                        <button className="avai__btn" onClick={() => updateGroupLessons()}>Змінити</button>
                    </div>
                </div>
            )}
        </div>
    );
};