import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson8 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">CSS селектори.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось що таке CSS селектори.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке CSS селектори?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Селектори CSS - це патерни, які визначають, які HTML-елементи на сторінці стилізуються за допомогою CSS. Селектори вибирають цільові елементи на сторінці, до яких будуть застосовані стилі.</p>
                        <p className="content__paragraph">Основні селектори CSS та приклади:</p>                           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Селектор тегу (Type Selector):</p> 
                        <p className="content__paragraph">Вибирає всі елементи певного типу.</p>
                        <p className="content__paragraph"><code>{'Приклад: p { color: blue; } - всі абзаци будуть синього кольору.'}</code></p>                                      
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Класовий селектор (Class Selector):</p> 
                        <p className="content__paragraph">Вибирає елементи з певним класом.</p>   
                        <p className="content__paragraph"><code>{'Приклад: .btn { background-color: #007bff; } - всі елементи з класом .btn матимуть фоновий колір.'}</code></p>                           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Ідентифікаторний селектор (ID Selector):</p> 
                        <p className="content__paragraph">Вибирає елемент з унікальним ідентифікатором.</p>   
                        <p className="content__paragraph"><code>{'Приклад: #header { font-size: 24px; } - елемент з ідентифікатором header буде мати розмір шрифту 24px.'}</code></p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Селектор атрибуту (Attribute Selector):</p>
                        <p className="content__paragraph">Вибирає елементи з певним атрибутом.</p> 
                        <p className="content__paragraph"><code>{'Приклад: input[type="text"] { border: 1px solid #ccc; } - всі текстові поля будуть мати рамку.'}</code></p>            
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Селектор псевдокласу (Pseudo-class Selector):</p>  
                        <p className="content__paragraph">Вибирає елементи в певному стані або позиції.</p>
                        <p className="content__paragraph"><code>{'Приклад: a:hover { text-decoration: underline; } - посилання будуть підкреслені при наведенні курсора.'}</code></p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Селектор псевдоелемента (Pseudo-element Selector):</p> 
                        <p className="content__paragraph">Вибирає певну частину елемента.</p>  
                        <p className="content__paragraph"><code>{'Приклад: p::first-line { font-weight: bold; } - перший рядок абзацу буде жирним.'}</code></p>      
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Спадковий селектор (Descendant Selector):</p>  
                        <p className="content__paragraph">Вибирає елементи, які є дитинами певного елемента.</p>
                        <p className="content__paragraph"><code>{'Приклад: ul li { list-style: square; } - всі елементи <li> вкладені в <ul> будуть мати марку "квадрат".'}</code></p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Ці селектори допомагають точно вибирати та стилізувати елементи на веб-сторінці відповідно до вашого дизайну та потреб.</p>           
                        <a className="link" target="blank" href="https://webdesign.tutsplus.com/uk/the-30-css-selectors-you-must-memorize--net-16048t">Детальніше</a>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Псевдоелементи.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Псевдоелементи в CSS дозволяють стилізувати конкретні частини елементів без додавання додаткового HTML-коду. Ось кілька популярних псевдоелементів та приклади їх використання:</p> 
                        <a className="link" target="blank" href="https://www.youtube.com/watch?v=gM_9k1eWiXA&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=14&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E ">Відео в ютубі про псевдоелементи</a>          
                        <a className="link" target="blank" href="https://html-css.co.ua/self-css/psevdoelementi/">Посилання на інформацію по темі</a>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Додати ховери на Xbox макет.</p>
                        <p className="content__paragraph">2. Зверстати <a className="link" target="blank" href="https://www.figma.com/community/file/1294305791550357579/simple-shoping-list">Макет</a>.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson8