import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson11 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Стилізація форм.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось, як стилізувати форми.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Посилання для ознайомлення.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Валідація HTML-форм - важливий аспект для забезпечення коректної інтеракції користувача з веб-сайтом. </p>
                        <a className="link" target="blank" href="https://blog.logrocket.com/how-to-style-forms-with-css-a-beginners-guide/">Посилання</a>
                        <a className="link" target="blank" href="https://appitventures.com/blog/styling-checkbox-css-tips">Посилання</a>
                        <a className="link" target="blank" href="https://css-tricks.com/almanac/properties/c/cursor/">Посилання</a>
                        <a className="link" target="blank" href="https://www.w3schools.com/howto/howto_css_custom_checkbox.asp">Посилання</a>
                    </div>
                </div>

                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зврестати форму <a className="link" target="blank" href="https://www.figma.com/file/8lXhAdN1Ui6hG9oI3pM3jF/Flexible-Form-Template-(Community)?type=design&node-id=0-1&mode=design&t=VXghD9ib8tG4YgWT-0">Посилання</a>.</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson11