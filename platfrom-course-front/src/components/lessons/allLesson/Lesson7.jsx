import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson7 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">CSS вступ.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось що таке CSS.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке CSS?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">CSS (Cascading Style Sheets) - це мова, яка використовується для оформлення і стилізації веб-сторінок. Вона визначає вигляд та відображення елементів HTML на веб-сайті.</p>
                        <p className="content__paragraph">CSS дозволяє розділити структуру веб-сторінки (HTML) від її оформлення. Стилізація включає в себе зміну кольорів, шрифтів, розмірів, відступів та інших властивостей елементів сторінки.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Підключення CSS.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Підключення CSS:</p>   
                        <p className="content__paragraph">Вбудований (inline): Стилі задаються безпосередньо у тезі HTML-елементів за допомогою атрибуту style.</p>  
                        <p className="content__paragraph">Внутрішній (internal): Стилі розміщуються в теці &lt;style&gt; у розділі &lt;head&gt; сторінки.</p>  
                        <p className="content__paragraph">Зовнішній (external): CSS зберігається в окремому файлі з розширенням .css і підключається до сторінки за допомогою тегу &lt;link&gt;.</p>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Спочатку створіть файл з розширенням .css, наприклад styles.css, і визначте в ньому стилі для вашого веб-сайту. <a className="link" target="blank" href="https://vyspiansky.gitbook.io/introduction-to-web-development/css/adding-css-to-html">Посилання.</a></p>  
                        <p className="content__paragraph">У цьому прикладі ми підключили файл styles.css, де визначені стилі для заголовку &lt;h1&gt;, тіла сторінки та кнопки з класом .btn. CSS дозволяє нам змінити кольори, шрифти, фони та інші властивості елементів на сторінці.</p>         
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Основні властивості.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">color: Визначає колір тексту.</p> 
                        <p className="content__paragraph">font-family: Встановлює шрифт тексту.</p>
                        <p className="content__paragraph">font-size: Задає розмір шрифту.</p>
                        <p className="content__paragraph">background-color: Встановлює колір фону.</p>
                        <p className="content__paragraph">margin та padding: Керують зовнішніми та внутрішніми відступами елемента.</p>
                        <p className="content__paragraph">border: Встановлює властивості межі навколо елемента.</p>
                        <p className="content__paragraph">width та height: Визначають ширину та висоту елемента.</p>          
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Корисні посилання.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://www.youtube.com/watch?v=kfOe-F64C_A&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=8&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E">Посилання 1.</a> 
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/css/css_syntax.html">Посилання 2.</a>
                        <a className="link" target="blank" href="https://www.youtube.com/watch?v=seewcjGHreg&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=9&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E">Посилання 3.</a>
                        <a className="link" target="blank" href="https://www.youtube.com/watch?v=G4aOu26s4_s&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=11&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E">Посилання 4.</a>        
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Додати стилі в html макет з минулого домашнього <a className="link" target="blank" href="https://www.figma.com/file/DoIDi8KtqZuyXKZZ8bL1Vj/Xbox-Landing-(Community)?type=design&mode=design&t=t3admjU8lZaxdgfW-0">Посилання</a>.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson7