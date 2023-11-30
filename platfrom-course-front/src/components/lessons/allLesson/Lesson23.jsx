import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson23_img/first.png"
import second from "./Lesson23_img/second.png"
import third from "./Lesson23_img/third.png"

export const Lesson23 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Масиви 1.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про масиви.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Створення масиву:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Масив - це упорядкований список значень в JavaScript. Ви можете створити масив, перераховуючи його елементи у квадратних дужках []. Наприклад:</p>
                        <p className="content__paragraph">const array = [1, 2, 3, 4, 5];</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Звернення за індексом:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елементи масиву нумеруються, починаючи з 0. Щоб звернутися до конкретного елемента, використовуйте індекс в квадратних дужках. Наприклад:</p>           
                        <p className="content__paragraph">console.log(array[1]) - Тобто ми звертаємось до другого члену масиву, тому що в програмуванні все починається з ноля</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Зміна елементів:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елементи масиву можна змінювати, просто присвоюючи нові значення за індексом. </p>    
                        <p className="content__paragraph">array[2] = 10; - замінили тертій елемент з трьох на 10</p>         
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Додавання елементів:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ви можете додавати нові елементи в кінець масиву, використовуючи метод push().</p>      
                        <p className="content__paragraph">array.push(6);</p>       
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Довжина масиву.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Властивість length дозволяє отримати довжину масиву, тобто кількість його елементів. </p>       
                        <p className="content__paragraph">console.log(array.lenght) - виведе в консоль довжину масиву (5)</p>     
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Перебор масивів.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">for: Цикл for дозволяє ітерувати через масив, використовуючи індекси. Приклад:</p>  
                        <img src={first} alt="#" className="img"/>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">for of: Цикл for of дозволяє ітерувати безпосередньо через елементи масиву. Приклад:</p>  
                        <img src={second} alt="#" className="img"/>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">forEach(): Метод forEach() дозволяє виконати функцію над кожним елементом масиву. Приклад:</p>  
                        <img src={third} alt="#" className="img"/>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Рекомедовано до прочитання.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://uk.javascript.info/data-types">Ознаймомитись з 4 і 5 пунктов</a>         
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень.</p>
                        <p className="content__paragraph">1. Створіть масив чисел та виведіть його на консоль.</p>
                        <p className="content__paragraph">2. Змініть значення третього елемента масиву на 10 та виведіть оновлений масив.</p>
                        <p className="content__paragraph">3. Додайте новий елемент до кінця масиву та виведіть результат.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть масив рядків та виведіть його на консоль.</p>
                        <p className="content__paragraph">2. Видаліть перший елемент масиву та виведіть результат.</p>
                        <p className="content__paragraph">3. Виведіть кожен елемент масиву, використовуючи цикл for або forEach().</p>
                        <p className="content__paragraph">Високий рівень.</p>
                        <p className="content__paragraph">1. Створіть масив об'єктів, де кожен об'єкт має властивості "ім'я" та "вік". Виведіть цей масив на консоль.</p>
                        <p className="content__paragraph">2. Видаліть всі об'єкти з масиву, в яких вік менше 30 років.</p>
                        <p className="content__paragraph">3. За допомогою циклу for пройдіться по всіх елементах масиву об'єктів і виведіть на консоль тільки імена.</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson23