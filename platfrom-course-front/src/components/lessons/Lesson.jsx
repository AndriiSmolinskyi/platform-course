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
import Lesson43 from "./allLesson/Lesson43";
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
        "PostgreSql, Node.js (два уроки)",
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
                        {selectedLesson === 1 && <Lesson1 lessonId={1} groupId={currentGroup}/>}
                        {selectedLesson === 2 && <Lesson2 lessonId={2} groupId={currentGroup}/>}
                        {selectedLesson === 3 && <Lesson3 lessonId={3} groupId={currentGroup}/>}
                        {selectedLesson === 4 && <Lesson4 lessonId={4} groupId={currentGroup}/>}
                        {selectedLesson === 5 && <Lesson5 lessonId={5} groupId={currentGroup}/>}
                        {selectedLesson === 6 && <Lesson6 lessonId={6} groupId={currentGroup}/>}
                        {selectedLesson === 7 && <Lesson7 lessonId={7} groupId={currentGroup}/>}
                        {selectedLesson === 8 && <Lesson8 lessonId={8} groupId={currentGroup}/>}
                        {selectedLesson === 9 && <Lesson9 lessonId={9} groupId={currentGroup}/>}
                        {selectedLesson === 10 && <Lesson10 lessonId={10} groupId={currentGroup}/>}
                        {selectedLesson === 11 && <Lesson11 lessonId={11} groupId={currentGroup}/>}
                        {selectedLesson === 12 && <Lesson12 lessonId={12} groupId={currentGroup}/>}
                        {selectedLesson === 13 && <Lesson13 lessonId={13} groupId={currentGroup}/>}
                        {selectedLesson === 14 && <Lesson14 lessonId={14} groupId={currentGroup}/>}
                        {selectedLesson === 15 && <Lesson15 lessonId={15} groupId={currentGroup}/>}
                        {selectedLesson === 16 && <Lesson16 lessonId={16} groupId={currentGroup}/>}
                        {selectedLesson === 17 && <Lesson17 lessonId={17} groupId={currentGroup}/>}
                        {selectedLesson === 18 && <Lesson18 lessonId={18} groupId={currentGroup}/>}
                        {selectedLesson === 19 && <Lesson19 lessonId={19} groupId={currentGroup}/>}
                        {selectedLesson === 20 && <Lesson20 lessonId={20} groupId={currentGroup}/>}
                        {selectedLesson === 21 && <Lesson21 lessonId={21} groupId={currentGroup}/>}
                        {selectedLesson === 22 && <Lesson22 lessonId={22} groupId={currentGroup}/>}
                        {selectedLesson === 23 && <Lesson23 lessonId={23} groupId={currentGroup}/>}
                        {selectedLesson === 24 && <Lesson24 lessonId={24} groupId={currentGroup}/>}
                        {selectedLesson === 25 && <Lesson25 lessonId={25} groupId={currentGroup}/>}
                        {selectedLesson === 26 && <Lesson26 lessonId={26} groupId={currentGroup}/>}
                        {selectedLesson === 27 && <Lesson27 lessonId={27} groupId={currentGroup}/>}
                        {selectedLesson === 28 && <Lesson28 lessonId={28} groupId={currentGroup}/>}
                        {selectedLesson === 29 && <Lesson29 lessonId={29} groupId={currentGroup}/>}
                        {selectedLesson === 30 && <Lesson30 lessonId={30} groupId={currentGroup}/>}
                        {selectedLesson === 31 && <Lesson31 lessonId={31} groupId={currentGroup}/>}
                        {selectedLesson === 32 && <Lesson32 lessonId={32} groupId={currentGroup}/>}
                        {selectedLesson === 33 && <Lesson33 lessonId={33} groupId={currentGroup}/>}
                        {selectedLesson === 34 && <Lesson34 lessonId={34} groupId={currentGroup}/>}
                        {selectedLesson === 35 && <Lesson35 lessonId={35} groupId={currentGroup}/>}
                        {selectedLesson === 36 && <Lesson36 lessonId={36} groupId={currentGroup}/>}
                        {selectedLesson === 37 && <Lesson37 lessonId={37} groupId={currentGroup}/>}
                        {selectedLesson === 38 && <Lesson38 lessonId={38} groupId={currentGroup}/>}
                        {selectedLesson === 39 && <Lesson39 lessonId={39} groupId={currentGroup}/>}
                        {selectedLesson === 40 && <Lesson40 lessonId={40} groupId={currentGroup}/>}
                        {selectedLesson === 41 && <Lesson40 lessonId={41} groupId={currentGroup}/>}
                        {selectedLesson === 42 && <Lesson42 lessonId={42} groupId={currentGroup}/>}
                        {selectedLesson === 43 && <Lesson43 lessonId={43} groupId={currentGroup}/>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lesson;