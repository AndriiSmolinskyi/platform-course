import { useContext, useEffect, useState } from "react"
import { GroupContext } from "../../../Context/GroupContext"
import { Loading } from "../../Loading/Loading";
import axios from 'axios';
import "../Teacher.scss";

export const Homeworks = () => {
    const { group } = useContext(GroupContext);

    return(
        <div>
            Домашнє завдання
        </div>    
    )
}