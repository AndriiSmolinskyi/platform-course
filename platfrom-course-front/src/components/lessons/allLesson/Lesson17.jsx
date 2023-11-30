import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson17_img/first.png"
import second from "./Lesson17_img/second.png"
import three from "./Lesson17_img/three.png"
import four from "./Lesson17_img/four.png"
import five from "./Lesson17_img/five.png"

export const Lesson17 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Основи JavaScript.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось основи JavaScript.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Завантаження і підключення JS.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://nodejs.org/en/download">Завантажити Node js</a>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Пікдлючення js файлу до проекту.</p>   
                        <img src={first} alt="#" className="img"/>        
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Hello World.</h3>
                    <div className="content__block">
                        <img src={second} alt="#" className="img"/> 
                        <p className="content__paragraph">Що ми тут бачимо? Console.log це фунція яка дозволяє щось вивести в консоль. Далі ми бачимо що Hello world написаний в лапках. Це потрібно для того щоб виводити певний текст, тобто це тип данних String.</p>           
                        <p className="content__paragraph">Нашу інфомарцію ми можемо побачити в консолі в браузері.</p> 
                        <img src={three} alt="#" className="img"/>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Змінна.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">В js ми будемо працювати із змінним і константами, щоб створити змінну або константу потрібно використати такий синтаксис.</p>           
                        <img src={four} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Додавання.</h3>
                    <div className="content__block">
                        <img src={five} alt="#" className="img"/>      
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Обовязково для прочитання!</h3>
                    <div className="content__block">
                        <p className="content__paragraph"><a className="link" target="blank" href="https://uk.javascript.info/first-steps">Прочитати 1-8 статті.</a></p>           
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень</p>
                        <p className="content__paragraph">1. Створіть змінну "name" і призначте їй ваше ім'я.</p>
                        <p className="content__paragraph">2. Створіть змінну "age" і присвойте їй ваш вік.</p>
                        <p className="content__paragraph">3. Виведіть на екран повідомлення "Ласкаво просимо, [ім'я]!" з використанням функції alert, де [ім'я] - ваше ім'я.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть змінну "isStudent" і призначте їй значення true, якщо ви студент, або false, якщо ні.</p>
                        <p className="content__paragraph">2. Створіть змінну "grades" і присвойте їй масив оцінок (наприклад, [90, 85, 92]).</p>
                        <p className="content__paragraph">3. Запитайте користувача про його вік з використанням prompt і збережіть результат у змінній.</p>
                        <p className="content__paragraph">Високий рівень</p>
                        <p className="content__paragraph">1. Створіть змінну "numString" і призначте їй рядок, який представляє число (наприклад, "42"). Потім перетворіть цей рядок в число і збережіть у іншій змінній.</p>
                        <p className="content__paragraph">2. Створіть дві змінні "number1" і "number2" і присвойте їм числові значення. Використовуючи базові математичні оператори (+, -, *, /), обчисліть результат додавання, віднімання, множення та ділення цих чисел.</p>
                        <p className="content__paragraph">3. Створіть змінну "modResult" і використайте оператор % для обчислення залишку від ділення одного числа на інше.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson17