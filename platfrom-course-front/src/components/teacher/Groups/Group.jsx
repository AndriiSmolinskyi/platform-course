import { useContext, useEffect, useState } from "react"
import { GroupContext } from "../../../Context/GroupContext"
import { Loading } from "../../Loading/Loading";
import axios from 'axios';
import "../Teacher.scss";
import { apiHost } from "../../../apiHost";

export const Group = () => {
    const { group } = useContext(GroupContext);
    const [ groupMembers, setGroupMembers ] = useState(null);
    const [ selectedGroup, setSelectedGroup ] = useState(null);

    const handleGetGroupMember = async (group_id) => {
        try {
            const response = await axios.get(`${apiHost}teacher/getGroupMembers/${group_id}`);
            setGroupMembers(response.data);
        } catch (error) {
            console.error("Error fetching group members:", error);
        }
    }


    const handleGroupChange = (event) => {
        const selectedGroupId = event.target.value;
        setSelectedGroup(selectedGroupId);
        handleGetGroupMember(selectedGroupId);
      };


    return (
        <div>
            <h1 className="teacher__title">Групи</h1>
            {group ? (
                <select onChange={handleGroupChange} value={selectedGroup || ""} className="group__select select">
                    <option value={null} className="select__option">Обрати групу</option>
                    {group.map((groupItem) => (
                    <option key={groupItem.group_id} value={groupItem.group_id} className="select__option">
                        {groupItem.name_group} {groupItem.available_lessons}
                    </option>
                    ))}
                </select>
                ) : (
                <Loading></Loading>
            )}

                    
            {groupMembers && (
                <div className="groupName__block">
                    <p className="groupName__block__title">Учасники групи:</p>
                    
                    {groupMembers.map((member, index) => (
                        <p key={index} className="groupName__block__text">{member.name} {member.surname}</p>
                    ))}
                    
                </div>
            )}

        </div>
    );
};