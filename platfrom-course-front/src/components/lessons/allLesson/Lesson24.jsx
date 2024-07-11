import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson24_img/first.png"
import second from "./Lesson24_img/second.png"
import third from "./Lesson24_img/third.png"
import four from "./Lesson24_img/four.png"
import five from "./Lesson24_img/five.png"
import six from "./Lesson24_img/six.png"
import seven from "./Lesson24_img/seven.png"
import eight from "./Lesson24_img/eight.png"

export const Lesson24 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Масиви 2.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось більше про масиви і методи.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Pop і Push:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">pop(): Метод pop() видаляє останній елемент з масиву та повертає його.</p>
                        <p className="content__paragraph">push(): Метод push() додає новий елемент до кінця масиву.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Shift і Unshift:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">shift(): Метод shift() видаляє перший елемент з масиву та повертає його.</p>  
                        <p className="content__paragraph">unshift(): Метод unshift() додає новий елемент до початку масиву.</p>            
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Splice:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">splice(): Метод splice() використовується для зміни вмісту масиву, видаляючи, замінюючи або додавання елементів.</p>           
                        <p className="content__paragraph">масив.splice(початковий_індекс, кількість_видалених_елементів, [елемент1, елемент2, ...]);</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Map:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">map(): Метод map() створює новий масив, застосовуючи функцію до кожного елемента вихідного масиву.</p>   
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Filter:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">filter(): Метод filter() створює новий масив, містячи тільки елементи, які задовольняють певну умову, визначену функцією.</p>           
                        <img src={third} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Concat:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">concat(): Метод concat() об'єднує два або більше масиви в один новий масив.</p> 
                        <p className="content__paragraph">const новийМасив = масив1.concat(масив2, масив3, ...);</p>          
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">IndexOf і LastIndexOf:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">indexOf(): Метод indexOf() знаходить перший індекс заданого елемента у масиві або повертає -1, якщо елемент не знайдено.</p>           
                        <p className="content__paragraph">lastIndexOf(): Метод lastIndexOf() знаходить останній індекс заданого елемента у масиві або повертає -1, якщо елемент не знайдено.</p> 
                        <img src={five} alt="#" className="img"/>
                        <img src={six} alt="#" className="img"/>
                        <img src={seven} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Includes:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">includes(): Метод includes() перевіряє, чи масив містить певний елемент і повертає true або false.</p>           
                        <p className="content__paragraph">масив.includes(елемент, початковий_індекс);</p> 
                        <img src={eight} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Рекомендовано для прочитання.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/js/js_array_methods.html#gsc.tab=0">Посилання 1.</a> 
                        <a className="link" target="blank" href="https://uk.javascript.info/array-methods">Посилання 2.</a>         
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень.</p>
                        <p className="content__paragraph">1. Створіть масив fruits зі списком фруктів: "apple", "banana", "cherry", "date". Використовуючи метод push(), додайте до нього новий фрукт "grape". Виведіть оновлений масив.</p>
                        <p className="content__paragraph">2. Використовуючи метод pop(), видаліть останній елемент з масиву fruits. Виведіть оновлений масив.</p>
                        <p className="content__paragraph">3. Створіть масив numbers з числами від 1 до 5. Використовуючи метод shift(), видаліть перший елемент з масиву. Виведіть оновлений масив.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть масив colors зі списком кольорів: "red", "green", "blue". Використовуючи метод unshift(), додайте до нього новий колір "yellow". Виведіть оновлений масив.</p>
                        <p className="content__paragraph">2. Створіть масив grades з оцінками студентів: [85, 92, 78, 90, 88]. Використовуючи метод splice(), видаліть другий та третій елементи та додайте нові оцінки [95, 87] на їхнє місце. Виведіть оновлений масив.</p>
                        <p className="content__paragraph">3. Створіть масив words з рядками: "apple", "banana", "cherry", "date". Використовуючи метод concat(), створіть новий масив, який буде об'єднанням words та масиву ["fig", "grape"]. Виведіть новий масив.</p>
                        <p className="content__paragraph">Високий рівень.</p>
                        <p className="content__paragraph">1. Створіть масив numbers з числами від 1 до 10. Використовуючи метод map(), створіть новий масив squaredNumbers, де кожен елемент буде піднесений до квадрату. Виведіть squaredNumbers.</p>
                        <p className="content__paragraph">2. Створіть масив продукти з об'єктами товарів, де кожен товар має властивості назва та ціна. Використовуючи метод filter(), створіть новий масив дорогіПродукти, який буде містити товари з ціною вище 50. Виведіть дорогіПродукти.</p>
                        <p className="content__paragraph">3. Створіть масив букви з рядком "abcdefg". Використовуючи метод includes(), перевірте, чи міститься літера "c" в масиві букви та виведіть результат.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson24