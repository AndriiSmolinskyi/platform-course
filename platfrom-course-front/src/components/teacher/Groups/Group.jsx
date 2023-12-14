import { useContext, useEffect, useState } from "react"
import { GroupContext } from "../../../Context/GroupContext"
import { Loading } from "../../Loading/Loading";

export const Group = () => {
    const { group } = useContext(GroupContext);
    console.log(group)
    return (
        <div>
            {group ? (
                group.map((groupItem, index) => (
                    <li key={index}>
                        {groupItem.name_group} {groupItem.available_lessons}
                    </li>
                ))
            ) : (
                <Loading></Loading>
            )}
        </div>
    );
};