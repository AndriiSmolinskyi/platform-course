import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson34_img/first.png"
import second from "./Lesson34_img/second.png"
import three from "./Lesson34_img/three.png"
import four from "./Lesson34_img/four.png"
import five from "./Lesson34_img/five.png"

export const Lesson34 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Вступ до React.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про react.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">React.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">React - це бібліотека JavaScript, яка дозволяє створювати інтерактивні інтерфейси для веб-додатків. Вона базується на моделі DOM (Document Object Model), яка представляє веб-сторінку як структуру дерева. React дозволяє легко оновлювати лише ті частини сторінки, які потребують змін, завдяки використанню віртуального DOM - спрощеної копії реального DOM. Важливою особливістю React є створення односторінкових додатків (SPA), де лише певні фрагменти сторінки оновлюються без повного перезавантаження.</p>
                        <p className="content__paragraph">Create React App - це інструмент, який допомагає створити React-додаток без потреби в додатковій конфігурації. Він надає швидке налаштування React-додатку і дозволяє вибирати потрібні інструменти.</p>
                        <p className="content__paragraph">Babel - це набір інструментів, який використовується для перетворення коду ECMAScript 2015+ на сумісну версію JavaScript у різних браузерах та середовищах. Він також дозволяє використовувати JSX - спеціальний синтаксис для опису елементів React.</p>
                        <p className="content__paragraph">JSX - це синтаксис JavaScript, який дозволяє вбудовувати елементи HTML безпосередньо в код React. Він перетворює теги HTML на елементи React.</p>
                        <p className="content__paragraph">Render - це метод React, який використовується для відображення компонентів на сторінці.</p>
                        <p className="content__paragraph">React Components - це незалежні та повторно використовувані фрагменти коду, які допомагають організувати функціональність додатку.</p>
                        <p className="content__paragraph">Prettier - це утиліта для форматування коду з метою полегшення читання і підтримки кодового стандарту.</p>
                        <p className="content__paragraph">Linter - це утиліта для перевірки коду на валідність та відповідність кодовому стандарту.</p>
                        <p className="content__paragraph">Усі ці інструменти і терміни спрощують процес розробки веб-додатків на React та підвищують продуктивність програмістів.</p>
                        <a className="link" target="blank" href="https://uk.legacy.reactjs.org/">Документація React.</a> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Створення React проекту.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Можна прочитати тут <a className="link" target="blank" href="https://uk.legacy.reactjs.org/docs/create-a-new-react-app.html">Посилання на створення.</a></p>      
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Відкриваємо консоль в нашій папці та створюємо за допомогою такої команди.</p>   
                        <img src={first} alt="#" className="img"/>        
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Далі заходимо у vs code і вибираємо наш проект.</p>     
                        <p className="content__paragraph">Нажимаємо ctrl+j щоб відкрити консоль і пишемо команду для запуску.</p>   
                        <img src={second} alt="#" className="img"/>      
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Компоненти.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Перевага React в тому, що можна використовується компонентний підхід і ми розділяємо сторінку на багато різних компонентів, які можна звісно перевикористовувати.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Приклад розділеного семантичного шаблона на компоненти.</p> 
                        <img src={three} alt="#" className="img"/>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Приклад синтаксису компоненти.</p>   
                        <img src={four} alt="#" className="img"/>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Підключення до головного файлу.</p>  
                        <img src={five} alt="#" className="img"/>         
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати семантичний шаблон компонентним підходом React.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson34