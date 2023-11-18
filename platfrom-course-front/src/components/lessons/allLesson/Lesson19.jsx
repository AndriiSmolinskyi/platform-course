import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";
import first from "./Lesson19_img/first.png"
import second from "./Lesson19_img/second.png"
import third from "./Lesson19_img/third.png"
import four from "./Lesson19_img/four.png"
import five from "./Lesson19_img/five.png"
import six from "./Lesson19_img/six.png"
import seven from "./Lesson19_img/seven.png"
import eight from "./Lesson19_img/eight.png"
import nine from "./Lesson19_img/nine.png"

export const Lesson19 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Умови.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про умови, if, switch, логічні оператори.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Умовні розгалуження: if, '?'</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Іноді нам потрібно виконувати різні дії на основі різних умов. Для цього ми можемо використовувати інструкцію if та умовний оператор ?, що також називається оператором “знак питання”.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">if</p>   
                        <img src={first} alt="#" className="img"/>    
                        <p className="content__paragraph">Варіант на більшу перевірку.</p>  
                        <img src={second} alt="#" className="img"/>    
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">? тернарний оператор. Він виконує ту саму функцію але займає менше місця.</p>   
                        <img src={third} alt="#" className="img"/>          
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Логічні оператори.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">В JavaScript існує чотири логічні оператори: || (АБО), && (І), ! (НЕ), ?? (оператор null-об’єднання).</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Логічне або( || ). Якщо хоч з одних операндів вертає true то результат буде true. Тобто якщо щось одне проходить то результат true.</p>          
                        <img src={four} alt="#" className="img"/>
                        <img src={five} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Логічне і &&. Потрібно щоб два операнди були тру щоб повернувся результат true.</p>           
                        <img src={six} alt="#" className="img"/>
                        <img src={seven} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Логічне не !. Він  міняє результат з true на false і навпаки. Використовується часто в порівнянні в умовах як не дорівнює !=.</p>           
                        <img src={eight} alt="#" className="img"/>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Умовний оператор switch case.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Він потрібний для того, щоб не був занадто довгий if else if else.</p>    
                        <img src={nine} alt="#" className="img"/>        
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Важливо для прочитання.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://uk.javascript.info/first-steps">Прочитати 9, 10, 11, 14 статті.</a>      
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень.</p>
                        <p className="content__paragraph">1. Напишіть програму, яка перевіряє, чи є число парним. Виведіть "Парне", якщо число парне, і "Непарне" у іншому випадку.</p>
                        <p className="content__paragraph">2. Створіть програму, яка приймає вік користувача і визначає, чи він/вона дорослий (18 і більше років) чи ні.</p>
                        <p className="content__paragraph">3. Напишіть програму, яка приймає два числа і виводить більше з них.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть програму, яка визначає, чи є рік високосним. Високосний рік ділиться на 4, але не ділиться на 100, окрім випадків, коли він ділиться на 400.</p>
                        <p className="content__paragraph">2. Напишіть програму, яка приймає три числа і визначає, чи можуть ці числа створити трикутник (сума будь-яких двох чисел повинна бути більшою за третє число).</p>
                        <p className="content__paragraph">3. Створіть програму, яка перевіряє, чи введене число є додатнім, від'ємним або нулем.</p>
                        <p className="content__paragraph">Високий рівень.</p>
                        <p className="content__paragraph">1. Напишіть програму для обчислення податку на прибуток за наступною логікою: до 10 000 грн - 10% податку, від 10 000 до 50 000 грн - 20% податку, понад 50 000 грн - 30% податку.</p>
                        <p className="content__paragraph">2. Створіть програму, яка приймає три числа і виводить їх у порядку спадання.</p>
                        <p className="content__paragraph">3. Розробіть "квест" - програму, де користувач вводить відповіді на різні питання, і в залежності від відповідей він отримує різні "кінцівки" інтерактивного оповідання.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson19