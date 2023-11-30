import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson21_img/first.png"
import two from "./Lesson21_img/two.png"
import three from "./Lesson21_img/three.png"
import four from "./Lesson21_img/four.png"
import five from "./Lesson21_img/five.png"

export const Lesson21 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Функції.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про функції.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Функції.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Функції - це блоки коду, які виконують конкретні завдання і можуть бути використані багато разів у вашій програмі.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Створення та виклик функції.</h3>
                    <div className="content__block">
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Як ми бачимо для створення функції ми використовуємо ключове слово function і даємо назву функції. Щоб викликати функцію потрібно написати її назву і дужки.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Параметри функції.</h3>
                    <div className="content__block">
                        <img src={two} alt="#" className="img"/>
                        <p className="content__paragraph">Параметри ми передаємо при виклику функції. Далі данні які ми передали записуються в назву параметру яку ми задали, в цьому випадку name. І робимо операції.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Локальні і глобальні змінні.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Різниця в них є локальні змінні це змінні які були створенні в певній функції і там використовується. По використанню чимось з параметром схоже. І ця змінна доступна тільки в цій функції.</p>           
                        <p className="content__paragraph">Глобальна змінна – це стандартна змінна в JS.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Повернення.</h3>
                    <div className="content__block">
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Зазвичай функції нічого не повертають, і щоб функція щось вернула і записати результат дії функції у змінну, тощо, потрібно використати return.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Стрілкові функції.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Вони слугують для оптимізації коду.</p>   
                        <img src={four} alt="#" className="img"/>   
                        <p className="content__paragraph">Приклад для більшої стрілкової функції.</p>     
                        <img src={five} alt="#" className="img"/>   
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Важливо до прочитання.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://uk.javascript.info/first-steps">Ознайомитись зі всім до 17 пункта включно.</a>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень.</p>
                        <p className="content__paragraph">1. Напишіть функцію, яка приймає два числа і повертає більше з них.</p>
                        <p className="content__paragraph">2. Створіть функцію, яка приймає рядок і повертає його великими літерами (uppercase).</p>
                        <p className="content__paragraph">3. Напишіть функцію, яка приймає два числа і повертає їх суму.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть функцію, яка приймає рядок і повертає його в оберненому порядку.</p>
                        <p className="content__paragraph">2. Напишіть функцію, яка приймає число і перевіряє, чи воно є парним.</p>
                        <p className="content__paragraph">3. Розробіть функцію, яка приймає рядок і повертає кількість голосних літер (букв "a", "e", "i", "o", "u") в цьому рядку.</p>
                        <p className="content__paragraph">Високий рівень.</p>
                        <p className="content__paragraph">1. Напишіть функцію, яка приймає рядок та визначає, чи є він паліндромом (читається однаково зліва направо і справа наліво).</p>
                        <p className="content__paragraph">2. Створіть функцію, яка приймає число і повертає суму всіх чисел від 1 до цього числа (включно).</p>
                        <p className="content__paragraph">3. Розробіть функцію, яка приймає два числа і повертає їх найменший спільний кратник (НСК).</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson21