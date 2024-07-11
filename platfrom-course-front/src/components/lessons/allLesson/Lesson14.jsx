import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import example1 from "./Lesson14_img/example1.png"

export const Lesson14 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Адаптивність 2.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось більше про адаптивність.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке адаптивність?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Адаптивність у веб-дизайні - це здатність сайту адекватно реагувати на зміни розмірів та орієнтації екрану користувача, забезпечуючи оптимальний перегляд та функціональність на різних пристроях.</p>                       
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Дизайн "мобільні перші" (mobile-first) - це підхід, при якому спершу розробляються мобільні версії сайту, а потім додаються стилі для більших екранів. Цей підхід забезпечує оптимальний дизайн для маленьких екранів, які часто мають обмежене просторове розташування.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Використання відносних одиниць виміру, таких як відсотки (%), дозволяє створювати елементи, які автоматично масштабуються відповідно до розміру екрану. Резиновий та процентний дизайн допомагають забезпечити, що ваш вміст буде виглядати добре на будь-якому пристрої.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Запити засобів (media queries) - це CSS-правила, які використовуються для зміни стилів в залежності від характеристик екрану, таких як ширина та висота. Вони дозволяють визначити розмір екрану, орієнтацію, піксельну щільність та інші параметри і встановити відповідні стилі.</p>           
                        <p className="content__paragraph">Приклад медіа-запиту для стилізації елементів на екранах шириною більше 768 пікселів:</p> 
                        <img src={example1} alt="#" className="img"/>
                    </div>       
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Посилання на статті по адаптивним зображенням.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">Посилання 1.</a>
                        <a className="link" target="blank" href="https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/">Посилання 2.</a>  
                        <a className="link" target="blank" href="https://web.dev/learn/design/responsive-images/">Посилання 3.</a>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати <a className="link" target="blank" href="https://www.figma.com/file/jY5C9ehdB3pbYuMMb6Pd9P/Simply-Home-(Community)?node-id=0%3A1&mode=dev">Макет</a>.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson14