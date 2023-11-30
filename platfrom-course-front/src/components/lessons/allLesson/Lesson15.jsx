import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson15 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Комадна верстка.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні буде комадна верстка.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Комадна верстка.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Для заняття необхідно буде використовувати Github, Github Desktop, Discord, Visual studio, Prepros. Під час виконання студенти повинні радитись і працювати в діскорд своєю групкою.</p>
                        <p className="content__paragraph">Потрібно оглянути минуле заняття по гітхаб.</p>  
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Доверстати командою <a className="link" target="blank" href="https://www.figma.com/file/eXAczNdyCXWKfm0YdSwvPh/School-Remarkable---html-website-template%C2%A0with-source-code-for-school-(Community)?node-id=2636%3A1327&mode=dev">Макет</a>.</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson15