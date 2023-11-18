import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";
import first from "./Lesson37_img/first.png"
import second from "./Lesson37_img/second.png"


export const Lesson0 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Axios/useEffect.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про axios та хук useEffect.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Axios.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Axios - це реакт бібліотека для спрощених http запитів. Переваги в тому що не потрібно думати за json, тому що axios сам розпарсить.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Як встановити Axios?</p>
                        <p className="content__paragraph">За допомогою команди npm install axios.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Приклад.</p>
                        <img src={first} alt="#" className="img"/> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Axios також підтримує такі додаткові функції:</p>         
                        <p className="content__paragraph">headers() - дозволяє налаштувати заголовки HTTP-запиту.</p> 
                        <p className="content__paragraph">params() - дозволяє налаштувати параметри HTTP-запиту.</p> 
                        <p className="content__paragraph">data() - дозволяє налаштувати дані HTTP-запиту.</p> 
                        <p className="content__paragraph">responseType() - дозволяє визначити тип даних, які будуть отримані в якості відповіді.</p>   
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">useEffect.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">useEffect - це хук React, який можна використовувати для виконання побічних ефектів. Побічні ефекти - це дії, які не пов'язані з рендерингом компонента. Наприклад, це може бути відправка запиту на сервер, завантаження файлу або ініціалізація бібліотеки.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Як використовувати useEffect?</p>      
                        <p className="content__paragraph">useEffect приймає два аргументи:</p>  
                        <p className="content__paragraph">Перший аргумент - це функція, яка буде виконана при монтажі або оновленні компонента.</p>  
                        <p className="content__paragraph">Другий аргумент - це функція, яка буде виконана при розмонтуванні компонента.</p>        
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Приклад використання useEffect для відправки запиту на сервер</p>    
                        <img src={second} alt="#" className="img"/>   
                        <p className="content__paragraph">Цей код відправляє GET-запит на адресу https://example.com/. Якщо запит успішно завершиться, функція then() буде викликана з об'єктом response, який містить інформацію про відповідь. Дані з відповіді зберігаються в локальному стані компонента.</p>       
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Створити сайт погоди, який робить запит до якоїсь Weather Api кожних 5 хвилин. Використати axios, setTimeout, useEffect.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson0