import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/UserContext"
import { GroupContext } from "../../Context/GroupContext"
import { Loading } from "../Loading/Loading";
import { Header } from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import "./Teacher.scss";
import { Group } from "./Groups/Group";
import { Homeworks } from "./Homeworks/Homeworks";
import { ActiveLesson } from "./ActiveLesson/ActiveLesson";
import { Materials } from "./Materials/Materials";

export const Teacher = () => {
    const { user } = useContext(UserContext)
    const { group } = useContext(GroupContext)
    const [ loading, setLoading ] = useState(false)
    const [ selectedItem, setselectedItem ] = useState(1)
    const navigation = useNavigate()

    const GoBack = () => {
        navigation('/')
    }

    useEffect(() => {        
        if (!user) {
            navigation('/');
        }
    }, [user, navigation]);

    const handleSelectComponent = (number) => {
        setselectedItem(number)
    }


    return(
        <div>
            <Header></Header>        
            <div className="teacher">                
                <div className="teacher__right">   
                    <FontAwesomeIcon icon={faArrowLeft} className="teacher__arrow" onClick={GoBack}/>               
                    <div className="teacher__right__item" onClick={() => handleSelectComponent(1)}>Групи</div>
                    <div className="teacher__right__item" onClick={() => handleSelectComponent(2)}>Домашнє завдання</div>
                    <div className="teacher__right__item" onClick={() => handleSelectComponent(3)}>Відкриті уроки</div>
                    <div className="teacher__right__item" onClick={() => handleSelectComponent(4)}>Матеріали</div>
                </div>
                <div className="teacher__left">
                    {selectedItem === 1 && <Group></Group>}
                    {selectedItem === 2 && <Homeworks></Homeworks>}
                    {selectedItem === 3 && <ActiveLesson></ActiveLesson>}
                    {selectedItem === 4 && <Materials></Materials>}
                </div>
            </div>        
        </div>    
    )
}