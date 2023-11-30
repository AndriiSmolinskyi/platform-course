import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson26_img/first.png"
import second from "./Lesson26_img/second.png"
import three from "./Lesson26_img/three.png"
import four from "./Lesson26_img/four.png"
import five from "./Lesson26_img/five.png"
import six from "./Lesson26_img/six.png"
import seven from "./Lesson26_img/seven.png"
import eight from "./Lesson26_img/eight.png"
import nine from "./Lesson26_img/nine.png"
import ten from "./Lesson26_img/ten.png"

export const Lesson26 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Події.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про події.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Події</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Подія – це сигнал від браузера, що щось сталося. Всі DOM-вузли подають такі сигнали (хоча події бувають не тільки в DOM).</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Метод addEventListener().</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Метод addEventListener() дозволяє додавати обробник події до елемента в HTML.</p>           
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Робота з this в обробнику.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Часом, для взаємодії з поточним елементом, може знадобитися використовувати this.</p>           
                        <img src={first} alt="#" className="img"/>
                        <img src={three} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Ключове слово event.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Об'єкт event містить інформацію про подію та дозволяє отримати доступ до деталей події.</p>           
                        <img src={first} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">Ще корисна фішка з evemt це event.preventdefault().</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Декілька прикладів івентів.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Обробка подвійного кліку.</p>  
                        <img src={five} alt="#" className="img"/>
                        <img src={six} alt="#" className="img"/>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Клавіші.</p>  
                        <img src={seven} alt="#" className="img"/>
                        <img src={eight} alt="#" className="img"/>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Події Миші.</p>  
                        <img src={nine} alt="#" className="img"/>
                        <img src={ten} alt="#" className="img"/>         
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень.</p>
                        <p className="content__paragraph">1. Створіть кнопку, яка змінює колір тексту при кожному кліку на неї.</p>
                        <p className="content__paragraph">2. Створіть поле введення тексту, яке очищається, коли користувач подвійно клікає на нього.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створити світлофор.</p>
                        <p className="content__paragraph">2. Створіть сторінку, на якій користувач може вводити текст за допомогою клавіатури. Потрібно визначити магічну комбінацію клавіш, наприклад, "Ctrl + Alt + M". Якщо користувач вводить цю комбінацію, виведіть повідомлення, яке говорить: "Ви створили магію!".</p>
                        <p className="content__paragraph">Високий рівень.</p>
                        <p className="content__paragraph">1. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.</p>
                        <p className="content__paragraph">2. Створіть фотогалерею. Коли користувач клікає на зображення, виводьте його в більшому розмірі в окремому вікні. Додайте можливість перегортати зображення за допомогою кнопок "Назад" та "Вперед".</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson26