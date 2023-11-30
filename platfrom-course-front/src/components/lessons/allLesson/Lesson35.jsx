import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson35_img/first.png"
import second from "./Lesson35_img/second.png"
import three from "./Lesson35_img/three.png"

export const Lesson0 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">React state/props</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про useState та props.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">State</h3>
                    <div className="content__block">
                        <p className="content__paragraph">State в React - це об'єкт, який зберігає дані, які можуть змінюватися в процесі взаємодії з користувачем або від інших джерел. State зберігається в компонентах та може бути змінений за допомогою методу setState.</p>
                        <img src={first} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Props.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Props (властивості) - це спосіб передачі даних в компоненти React. Властивості передаються компоненту як атрибути та доступні як props об'єкт.</p>   
                        <p className="content__paragraph">Приклад</p>  
                        <img src={second} alt="#" className="img"/>  
                        <p className="content__paragraph">В батьківський компоненті</p>     
                        <img src={three} alt="#" className="img"/>    
                    </div>
                </div>

                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Створити компонент, який відображає статус виконання завдання.</p>
                        <p className="content__paragraph">2. Створіть компонент UserProfile, який отримує props з даними про користувача (ім'я, електронну пошту, статус). Виведіть ці дані на сторінці, включаючи значок статусу (наприклад, онлайн або офлайн). Додайте можливість редагування цих даних за допомогою кнопки "Редагувати"..</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson0