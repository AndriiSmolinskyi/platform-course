import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";
import first from "./Lesson12_img/first.png"
import second from "./Lesson12_img/second.png"
import third from "./Lesson12_img/third.png"
import four from "./Lesson12_img/four.png"
import five from "./Lesson12_img/five.png"
import six from "./Lesson12_img/six.png"

export const Lesson12 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Scss.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось, що таке Scss.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">SCSS</h3>
                    <div className="content__block">
                        <p className="content__paragraph">SCSS (Sassy CSS) - це розширена версія CSS, яка додає багато корисних функцій і можливостей для створення більш зручного та організованого коду стилів. </p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Основні концепції:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Змінні: SCSS дозволяє визначати змінні для кольорів, розмірів, шрифтів та інших значень, які можна використовувати в усьому коді. Наприклад:</p> 
                        <img src={first} alt="#" className="img"/>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Вкладені селектори: Ви можете вкладати селектори один в одного, щоб краще структурувати код:</p> 
                        <img src={second} alt="#" className="img"/>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Модульність: SCSS сприяє розділенню коду на модулі для кращої організації і підтримки коду.</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Функції: SCSS має багато вбудованих функцій для обробки значень. Наприклад, функція darken() дозволяє змінювати колір на певну кількість тонів темніше:</p> 
                        <img src={third} alt="#" className="img"/>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Міксіни: Міксіни - це фрагменти коду, які можна використовувати багаторазово. Вони допомагають уникнути дублювання коду:</p> 
                        <img src={four} alt="#" className="img"/>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Умовні оператори: SCSS підтримує умовні оператори, які дозволяють змінювати стилі в залежності від умов:</p> 
                        <img src={five} alt="#" className="img"/>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Імпорт файлів: Ви можете розділити свій код на окремі файли і імпортувати їх в головний файл. Це сприяє кращій структуризації проекту.</p> 
                        <img src={six} alt="#" className="img"/>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Загальні змінні: SCSS дозволяє визначати змінні, які будуть доступні в усіх файлах. Це корисно для збереження глобальних значень.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">До урока завантажити <a className="link" target="blank" href="https://prepros.io/">Prepros</a>.</p>           
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати <a className="link" target="blank" href="https://www.figma.com/file/Cr43j8OcF2OwXRYJBsgTpk/Finpoint---Financial-Consulting-Landing-Page-Design-(Free)-(Community)?type=design&node-id=0-1&mode=design&t=A20h0lIbuB2cgluu-0">Макет</a>.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson12