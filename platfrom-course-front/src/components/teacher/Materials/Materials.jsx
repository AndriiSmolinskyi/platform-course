import "../Teacher.scss";
import "../../lessons/LessonList.scss";
import Lesson1 from "../../lessons/allLesson/Lesson1";
import Lesson2 from "../../lessons/allLesson/Lesson2";
import Lesson3 from "../../lessons/allLesson/Lesson3";
import Lesson4 from "../../lessons/allLesson/Lesson4";
import Lesson5 from "../../lessons/allLesson/Lesson5";
import Lesson6 from "../../lessons/allLesson/Lesson6";
import Lesson7 from "../../lessons/allLesson/Lesson7";
import Lesson8 from "../../lessons/allLesson/Lesson8";
import Lesson9 from "../../lessons/allLesson/Lesson9";
import Lesson10 from "../../lessons/allLesson/Lesson10";
import Lesson11 from "../../lessons/allLesson/Lesson11";
import Lesson12 from "../../lessons/allLesson/Lesson12";
import Lesson13 from "../../lessons/allLesson/Lesson13";
import Lesson14 from "../../lessons/allLesson/Lesson14";
import Lesson15 from "../../lessons/allLesson/Lesson15";
import Lesson16 from "../../lessons/allLesson/Lesson16";
import Lesson17 from "../../lessons/allLesson/Lesson17";
import Lesson18 from "../../lessons/allLesson/Lesson18";
import Lesson19 from "../../lessons/allLesson/Lesson19";
import Lesson20 from "../../lessons/allLesson/Lesson20";
import Lesson21 from "../../lessons/allLesson/Lesson21";
import Lesson22 from "../../lessons/allLesson/Lesson22";
import Lesson23 from "../../lessons/allLesson/Lesson23";
import Lesson24 from "../../lessons/allLesson/Lesson24";
import Lesson25 from "../../lessons/allLesson/Lesson25";
import Lesson26 from "../../lessons/allLesson/Lesson26";
import Lesson27 from "../../lessons/allLesson/Lesson27";
import Lesson28 from "../../lessons/allLesson/Lesson28";
import Lesson29 from "../../lessons/allLesson/Lesson29";
import Lesson30 from "../../lessons/allLesson/Lesson30";
import Lesson31 from "../../lessons/allLesson/Lesson31";
import Lesson32 from "../../lessons/allLesson/Lesson32";
import Lesson33 from "../../lessons/allLesson/Lesson33";
import Lesson34 from "../../lessons/allLesson/Lesson34";
import Lesson35 from "../../lessons/allLesson/Lesson35";
import Lesson36 from "../../lessons/allLesson/Lesson36";
import Lesson37 from "../../lessons/allLesson/Lesson37";
import Lesson38 from "../../lessons/allLesson/Lesson38";
import Lesson39 from "../../lessons/allLesson/Lesson39";
import Lesson40 from "../../lessons/allLesson/Lesson40";
import Lesson41 from "../../lessons/allLesson/Lesson41";
import Lesson42 from "../../lessons/allLesson/Lesson42";
import Lesson43 from "../../lessons/allLesson/Lesson43";
import Lesson from "../../lessons/Lesson";
import { useState } from "react";
import "../Teacher.scss";

export const Materials = () => {
    const [count, setCount] = useState(43); // доступні уроки
    const [selectedLesson, setSelectedLesson] = useState(1); // вибраний урок

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
        <div>
            <h1 className="teacher__title">Матеріали</h1>
            <div className="teacher__lesson">

                <select
                    className="select"
                    value={selectedLesson}
                    onChange={(e) => setSelectedLesson(parseInt(e.target.value))}
                >
                    {visibleLessons.map((lesson, index) => (
                        <option key={index} value={index + 1} className="select__option">
                            {`${index + 1}. ${lesson}`}
                        </option>
                    ))}
                </select>

                <div className="lesson-content">
                    {selectedLesson <= visibleLessons.length && (
                        <div>
                            {selectedLesson === 1 && <Lesson1 lessonId={1} />}
                            {selectedLesson === 2 && <Lesson2 lessonId={2} />}
                            {selectedLesson === 3 && <Lesson3 lessonId={3} />}
                            {selectedLesson === 4 && <Lesson4 lessonId={4} />}
                            {selectedLesson === 5 && <Lesson5 lessonId={5} />}
                            {selectedLesson === 6 && <Lesson6 lessonId={6} />}
                            {selectedLesson === 7 && <Lesson7 lessonId={7} />}
                            {selectedLesson === 8 && <Lesson8 lessonId={8} />}
                            {selectedLesson === 9 && <Lesson9 lessonId={9} />}
                            {selectedLesson === 10 && <Lesson10 lessonId={10} />}
                            {selectedLesson === 11 && <Lesson11 lessonId={11} />}
                            {selectedLesson === 12 && <Lesson12 lessonId={12} />}
                            {selectedLesson === 13 && <Lesson13 lessonId={13} />}
                            {selectedLesson === 14 && <Lesson14 lessonId={14} />}
                            {selectedLesson === 15 && <Lesson15 lessonId={15} />}
                            {selectedLesson === 16 && <Lesson16 lessonId={16} />}
                            {selectedLesson === 17 && <Lesson17 lessonId={17} />}
                            {selectedLesson === 18 && <Lesson18 lessonId={18} />}
                            {selectedLesson === 19 && <Lesson19 lessonId={19} />}
                            {selectedLesson === 20 && <Lesson20 lessonId={20} />}
                            {selectedLesson === 21 && <Lesson21 lessonId={21} />}
                            {selectedLesson === 22 && <Lesson22 lessonId={22} />}
                            {selectedLesson === 23 && <Lesson23 lessonId={23} />}
                            {selectedLesson === 24 && <Lesson24 lessonId={24} />}
                            {selectedLesson === 25 && <Lesson25 lessonId={25} />}
                            {selectedLesson === 26 && <Lesson26 lessonId={26} />}
                            {selectedLesson === 27 && <Lesson27 lessonId={27} />}
                            {selectedLesson === 28 && <Lesson28 lessonId={28} />}
                            {selectedLesson === 29 && <Lesson29 lessonId={29} />}
                            {selectedLesson === 30 && <Lesson30 lessonId={30} />}
                            {selectedLesson === 31 && <Lesson31 lessonId={31} />}
                            {selectedLesson === 32 && <Lesson32 lessonId={32} />}
                            {selectedLesson === 33 && <Lesson33 lessonId={33} />}
                            {selectedLesson === 34 && <Lesson34 lessonId={34} />}
                            {selectedLesson === 35 && <Lesson35 lessonId={35} />}
                            {selectedLesson === 36 && <Lesson36 lessonId={36} />}
                            {selectedLesson === 37 && <Lesson37 lessonId={37} />}
                            {selectedLesson === 38 && <Lesson38 lessonId={38} />}
                            {selectedLesson === 39 && <Lesson39 lessonId={39} />}
                            {selectedLesson === 40 && <Lesson40 lessonId={40} />}
                            {selectedLesson === 41 && <Lesson41 lessonId={41} />}
                            {selectedLesson === 42 && <Lesson42 lessonId={42} />}
                            {selectedLesson === 43 && <Lesson43 lessonId={43} />}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};