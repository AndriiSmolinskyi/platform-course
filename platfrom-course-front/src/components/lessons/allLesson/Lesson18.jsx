import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson18 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Оператори</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось більше про данні і оператори.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Терміни.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">У мові програмування JavaScript, вирази є комбінаціями даних та операцій.</p>        
                        <p className="content__paragraph">Операнди представляють дані, які обробляються в JavaScript. Операнди можуть бути простими або складними типами даних, такими як числа, рядки, або інші вирази.</p> 
                        <p className="content__paragraph">Оператори - це символи або ключові слова мови, які виконують різні дії з даними. Оператори можуть використовувати операнди для виконання математичних, логічних або інших операцій. Оператори записуються за допомогою символів або ключових слів.</p> 
                        <p className="content__paragraph">Унарний оператор використовується у виразі із одним операндом. Наприклад, унарний мінус (-x) змінює знак числа x.</p> 
                        <p className="content__paragraph">Бінарний оператор використовується з двома операндами. Наприклад, оператор додавання (+) об'єднує два числа (x + y).</p> 
                        <p className="content__paragraph">Тернарний оператор використовує три операнди і дозволяє виконати умовну операцію. Наприклад, у виразі (умова ? вираз1 : вираз2), вибирається один з двох виразів залежно від виконання умови.</p>    
                        <a className="link" target="blank" href="https://uk.javascript.info/first-steps">Освоїти до 9 пункта.</a>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Оператори порівння.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Оператори порівння використовуються для порівняння двох значень і повертають булеве значення (true або false) як результат. Ось декілька основних операторів порівння:</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">== (рівно): Порівнює два значення на рівність. Наприклад, 5 == 5 поверне true, а 5 == 10 поверне false.</p>
                        <p className="content__paragraph">!= (не рівно): Перевіряє, чи два значення не рівні одне одному. Наприклад, 5 != 10 поверне true, а 5 != 5 поверне false.</p>   
                        <p className="content__paragraph">&gt; (більше): Порівнює, чи перше значення більше за друге. Наприклад, 10 &gt; 5 поверне true, а 5 &gt; 10 поверне false.</p>   
                        <p className="content__paragraph">&lt; (менше): Перевіряє, чи перше значення менше за друге. Наприклад, 5 &lt; 10 поверне true, а 10 &lt; 5 поверне false.</p>   
                        <p className="content__paragraph">&gt;= (більше або рівне): Порівнює, чи перше значення більше або рівне другому. Наприклад, 10 &gt;= 5 поверне true, а 5 &gt;= 10 поверне false.</p>   
                        <p className="content__paragraph">&lt;= (менше або рівне): Перевіряє, чи перше значення менше або рівне другому. Наприклад, 5 &lt;= 10 поверне true, а 10 &lt;= 5 поверне false.</p>             
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Математичні оператори.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Математичні оператори використовуються для виконання математичних операцій над числовими значеннями. Ось декілька основних математичних операторів:</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">+ (додавання): Додає два числа разом. Наприклад, 5 + 3 дорівнює 8.</p>        
                        <p className="content__paragraph">- (віднімання): Віднімає одне число від іншого. Наприклад, 8 - 3 дорівнює 5.</p> 
                        <p className="content__paragraph">* (множення): Перемножує два числа. Наприклад, 4 * 2 дорівнює 8.</p> 
                        <p className="content__paragraph">/ (ділення): Ділить перше число на друге. Наприклад, 10 / 2 дорівнює 5.</p> 
                        <p className="content__paragraph">% (залишок від ділення): Повертає залишок від ділення одного числа на інше. Наприклад, 10 % 3 дорівнює 1, оскільки залишок від ділення 10 на 3 - 1.</p> 
                        <p className="content__paragraph">** (піднесення до степеня): Підносить число до певного степеня. Наприклад, 2 ** 3 дорівнює 8, оскільки 2 у степені 3 - 8.</p>    
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень</p>
                        <p className="content__paragraph">1. Зробити віднімання string "7" і числа 2. Відповідь має вийти матетично вірною.</p>
                        <p className="content__paragraph">2. Використовуючи операції додавання, віднімання, множення і ділення, обчисліть результат виразу: (10 + 5) * 2 - 7 / 3. Виведіть результат.</p>
                        <p className="content__paragraph">3. Створіть змінну "name" і присвойте їй ваше ім'я. Виведіть рядок, який містить ваше ім'я та каже "Привіт, [ім'я]!".</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть змінну "hours" і присвойте їй кількість годин у вашому робочому дні. Створіть змінну "rate" і присвойте їй ставку оплати за годину. Розрахуйте вашу заробітну плату за день та виведіть її.</p>
                        <p className="content__paragraph">2. Користувач вводить в промпт ціну свого продукту і потрібно вирахувати який в ній пдв.</p>
                        <p className="content__paragraph">3. Конвектор валют. Користувач вводить для прикладу 500 і йому покаже скільки це в доларах.</p>
                        <p className="content__paragraph">Високий рівень</p>
                        <p className="content__paragraph">1. Користувач вводить радіус кола і повинно вивестисть його діаметр, довжину та площу.</p>
                        <p className="content__paragraph">2. Депозит. Користувач вводить якусь кількість грошей під 4% річних. Скільки він отримає за два роки.</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson18