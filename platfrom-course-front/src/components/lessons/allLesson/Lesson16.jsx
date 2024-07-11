import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson16 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Проект 1.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми роздивимось Проект 1 та задамо питання.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Проект 1.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Що в себе включає Проект 1? В цьому проекті використаємо набуті знання про HTML/SCSS, Github, Github Desktop, Flexbox, Grid, Adaptive.</p>
                        <p className="content__paragraph">Вимоги:</p> 
                        <p className="content__paragraph">Правильний html/css код</p> 
                        <p className="content__paragraph">Використовувати препроцесори(scss)</p> 
                        <p className="content__paragraph">Верстка має бути відповідною до макету.</p> 
                        <p className="content__paragraph">Верстка має бути семантичною.</p> 
                        <p className="content__paragraph">Верстка має бути адаптивною</p> 
                        <p className="content__paragraph">Кросбраузерність.</p> 
                        <p className="content__paragraph">В інтераквтиних елементів має бути hover, тощо.</p> 
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Варіанти:</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. <a className="link" target="blank" href="https://www.figma.com/file/o7DnqYBATnwRoJIN8BoIAf/Space%3ANeo-(Community)?node-id=0%3A1&mode=dev">Варіант 1</a>.</p>
                        <p className="content__paragraph">2. <a className="link" target="blank" href="https://www.figma.com/file/KfKTNBuV4G9iFLXFP6ul88/SaaS-Homepage-Website-(Community)?node-id=0%3A1&mode=dev">Варіант 2</a>.</p>
                        <p className="content__paragraph">3. <a className="link" target="blank" href="https://www.figma.com/file/BM2yRE3OnYqiM2yTJCkNqz/Powerpro-CRM---Landing-Page-(Community)?type=design&node-id=3-2&mode=design&t=05rsBFymbi9hW9bQ-0">Варіант 3</a>.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson16