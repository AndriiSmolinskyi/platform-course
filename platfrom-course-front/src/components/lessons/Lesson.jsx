import "./LessonList.scss";
import { useState } from "react";
import Lesson1 from "./allLesson/Lesson1";
import Lesson2 from "./allLesson/Lesson2";
import Lesson3 from "./allLesson/Lesson3";
import Lesson4 from "./allLesson/Lesson4";
import Lesson5 from "./allLesson/Lesson5";
import Lesson6 from "./allLesson/Lesson6";
import Lesson7 from "./allLesson/Lesson7";
import Lesson8 from "./allLesson/Lesson8";
import Lesson9 from "./allLesson/Lesson9";
import Lesson10 from "./allLesson/Lesson10";
import Lesson11 from "./allLesson/Lesson11";
import Lesson12 from "./allLesson/Lesson12";
import Lesson13 from "./allLesson/Lesson13";
import Lesson14 from "./allLesson/Lesson14";
import Lesson15 from "./allLesson/Lesson15";
import Lesson16 from "./allLesson/Lesson16";
import Lesson17 from "./allLesson/Lesson17";
import Lesson18 from "./allLesson/Lesson18";
import Lesson19 from "./allLesson/Lesson19";
import Lesson20 from "./allLesson/Lesson20";
import Lesson21 from "./allLesson/Lesson21";
import Lesson22 from "./allLesson/Lesson22";
import Lesson23 from "./allLesson/Lesson23";
import Lesson24 from "./allLesson/Lesson24";
import Lesson25 from "./allLesson/Lesson25";
import Lesson26 from "./allLesson/Lesson26";
import Lesson27 from "./allLesson/Lesson27";
import Lesson28 from "./allLesson/Lesson28";
import Lesson29 from "./allLesson/Lesson29";
import Lesson30 from "./allLesson/Lesson30";
import Lesson31 from "./allLesson/Lesson31";
import Lesson32 from "./allLesson/Lesson32";
import Lesson33 from "./allLesson/Lesson33";
import Lesson34 from "./allLesson/Lesson34";
import Lesson35 from "./allLesson/Lesson35";
import Lesson36 from "./allLesson/Lesson36";
import Lesson37 from "./allLesson/Lesson37";
import Lesson38 from "./allLesson/Lesson38";
import Lesson39 from "./allLesson/Lesson39";
import Lesson40 from "./allLesson/Lesson40";
import Lesson41 from "./allLesson/Lesson41";
import Lesson42 from "./allLesson/Lesson42";
import { useContext } from "react";
import { GroupContext } from "../../Context/GroupContext";
import { UserContext } from "../../Context/UserContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Lesson = (  ) => {
    const { user } = useContext(UserContext)
    const { group, setGroup } = useContext(GroupContext)
    const [ count, setCount ] = useState(group[0].available_lessons)  //доступні уроки
    const [ selectedLesson, setSelectedLesson ] = useState(1); //вибраний урок    
    const [ select, setSelect ] = useState(false); //стан випадайки 
    const [ currentGroup, setCurrentGroup] = useState(group[0].group_id)

    const handleCheckGroup = (availableLessons, group_id) => {
        setCount(availableLessons);
        setCurrentGroup(group_id)
        setSelect(!select)
    };

    const handleDropcourse = () => {
        setSelect(!select)
    }

    const lessons = [
        "Вступний урок.",
        "Проект, основа html.",
        "Git, Github.",
        "Семантика, посилання, якорі.",
        "Форми.",
        "Figma.",
        "CSS вступ.",
        "CSS селектори.",
        "Flexbox.",
        "Grid.",
        "Стилізація Форм.",
        "Препроцесори.",
        "Адаптивність 1.",
        "Адаптивність 2.",
        "Команда верстка.",
        "Проект 1.",
        "Основи JavaScript",
        "Оператори та операнди.",
        "Умови.",
        "Цикли.",
        "Функції.",
        "Об'єкти.",
        "Масиви 1.",
        "Масив 2.",
        "DOM.",
        "Події.",
        "Слайдер.",
        "AJAX.",
        "Вебсховище.",
        "Основи ООП в JavaScript 1.",
        "Основи ООП в JavaScript 2.",
        "Ретроспектива.",
        "Проект 2.",
        "Вступ до React.",
        "React state/props.",
        "Рендеринг списків і умов.",
        "Axios/useEffect.",
        "React routing.",
        "Formik/yup.",
        "React context.",
        "Проект 3.",
        "Випускний."
    ];

    const visibleLessons = lessons.slice(0, count);

    return (
        <div className="lesson-main">

            <ul className="lesson-list">
                <h2 onClick={handleDropcourse} className="drop__h2">Мій курс <FontAwesomeIcon icon={faArrowDown} /></h2>
                {select && group.map((groupItem, index) => (
                    <li
                        key={index} 
                        className="lesson-list__item" 
                        onClick={() => handleCheckGroup(groupItem.available_lessons, groupItem.group_id)}
                    >
                        {groupItem.name_group} {groupItem.available_lessons}
                    </li>
                ))}


                {visibleLessons.map((lesson, index) => (
                    <li key={index} onClick={() => setSelectedLesson(index + 1)} className="lesson-list__item">
                        {`${index + 1}. ${lesson}`}
                    </li>
                ))}

            </ul>
            <div className="lesson-content">
                {selectedLesson <= visibleLessons.length && (
                    <div>
                        {selectedLesson === 1 && <Lesson1 hmId={1} group_id={currentGroup}/>}
                        {selectedLesson === 2 && <Lesson2 hmId={2}/>}
                        {selectedLesson === 3 && <Lesson3 />}
                        {selectedLesson === 4 && <Lesson4 />}
                        {selectedLesson === 5 && <Lesson5 />}
                        {selectedLesson === 6 && <Lesson6 />}
                        {selectedLesson === 7 && <Lesson7 />}
                        {selectedLesson === 8 && <Lesson8 />}
                        {selectedLesson === 9 && <Lesson9 />}
                        {selectedLesson === 10 && <Lesson10 />}
                        {selectedLesson === 11 && <Lesson11 />}
                        {selectedLesson === 12 && <Lesson12 />}
                        {selectedLesson === 13 && <Lesson13 />}
                        {selectedLesson === 14 && <Lesson14 />}
                        {selectedLesson === 15 && <Lesson15 />}
                        {selectedLesson === 16 && <Lesson16 />}
                        {selectedLesson === 17 && <Lesson17 />}
                        {selectedLesson === 18 && <Lesson18 />}
                        {selectedLesson === 19 && <Lesson19 />}
                        {selectedLesson === 20 && <Lesson20 />}
                        {selectedLesson === 21 && <Lesson21 />}
                        {selectedLesson === 22 && <Lesson22 />}
                        {selectedLesson === 23 && <Lesson23 />}
                        {selectedLesson === 24 && <Lesson24 />}
                        {selectedLesson === 25 && <Lesson25 />}
                        {selectedLesson === 26 && <Lesson26 />}
                        {selectedLesson === 27 && <Lesson27 />}
                        {selectedLesson === 28 && <Lesson28 />}
                        {selectedLesson === 29 && <Lesson29 />}
                        {selectedLesson === 30 && <Lesson30 />}
                        {selectedLesson === 31 && <Lesson31 />}
                        {selectedLesson === 32 && <Lesson32 />}
                        {selectedLesson === 33 && <Lesson33 />}
                        {selectedLesson === 34 && <Lesson34 />}
                        {selectedLesson === 35 && <Lesson35 />}
                        {selectedLesson === 36 && <Lesson36 />}
                        {selectedLesson === 37 && <Lesson37 />}
                        {selectedLesson === 38 && <Lesson38 />}
                        {selectedLesson === 39 && <Lesson39 />}
                        {selectedLesson === 40 && <Lesson40 />}
                        {selectedLesson === 41 && <Lesson41 />}
                        {selectedLesson === 42 && <Lesson42 />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lesson;