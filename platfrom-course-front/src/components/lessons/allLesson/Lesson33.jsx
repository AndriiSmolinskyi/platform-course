import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson33 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Проект 2.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми роздивимось Проект 2 та задамо питання.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Проект 2.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Що в себе включає виконання другого проекта нашого курса? Насамперед практично закріплення накопичених знань протягом перших двох семестрів.</p>
                        <p className="content__paragraph">1. Семантична верстка.</p>
                        <p className="content__paragraph">2. SCSS, також міксіни, змінні.</p>
                        <p className="content__paragraph">3. Захощений на Github Pages.</p>
                        <p className="content__paragraph">4. Використання JS.</p>
                        <p className="content__paragraph">5. Слайдер.</p>
                        <p className="content__paragraph">6. Всі інтерактивні елементи з ховерами, фокусами...</p>
                        <p className="content__paragraph">7. Якісний код.</p>
                        <p className="content__paragraph">8. Кросбраузерність.</p>
                        <p className="content__paragraph">9. БЕМ.</p>
                        <p className="content__paragraph">10. Слайдери.</p>
                        <p className="content__paragraph">11. Форма валідована.</p>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Варіанти.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. <a className="link" target="blank" href="https://www.figma.com/file/4otmSsCgxxB1BXHr2W1rnV/Responsive%2FComponents-Landing-Page---Construction-Company-(Community)?node-id=34%3A205&mode=dev">Посилання</a>.</p>
                        <p className="content__paragraph">2. <a className="link" target="blank" href="https://www.figma.com/file/suymW76wwXAqTKeevmGv30/Analytics-%E2%80%94-Landing-Page-Design-(Community)?node-id=1%3A178&mode=dev">Посилання</a>.</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson33