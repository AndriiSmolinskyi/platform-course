import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson22_img/first.png"
import two from "./Lesson22_img/two.png"
import three from "./Lesson22_img/three.png"
import four from "./Lesson22_img/four.png"
import five from "./Lesson22_img/five.png"
import six from "./Lesson22_img/six.png"
import seven from "./Lesson22_img/seven.png"
import eight from "./Lesson22_img/eight.png"

export const Lesson22 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Обєкти.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось обєкти.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Обєкт</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Об'єкт - це структура даних, що містить в собі пари "ключ-значення". Кожне значення зберігається під унікальним ключем. Це дозволяє організовувати та доступатися до даних у більш зручний спосіб.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Обєкт.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Створення обєкта.</p>   
                        <img src={first} alt="#" className="img"/>        
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Доступ до властивостей.</p>          
                        <img src={two} alt="#" className="img"/> 
                        <img src={three} alt="#" className="img"/>  
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Зміна та додавання властивостей.</p> 
                        <img src={four} alt="#" className="img"/> 
                        <img src={five} alt="#" className="img"/>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Видалення.</p>    
                        <p className="content__paragraph">Для видалення ключа використовується delete.</p>    
                        <img src={six} alt="#" className="img"/>    
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Копіювання</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Є декілька методів копіювання обєкта але зараз покажу один з них.</p>   
                        <img src={seven} alt="#" className="img"/>        
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Методи обєкта.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Вони потрібні щоб можна було працювати ширше з обєктом. Простіше метод це функція всередині обєкта.</p>      
                        <p className="content__paragraph">Ми тут можемо побачити ключове слово this. Воно потрібно для задання контексту, тобто вказує що ми звертається до даних цього обєкта.</p>       
                        <img src={eight} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Важливо для прочитання.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://uk.javascript.info/object-basics">Найбільш важливі статті 1, 2, 4. Але рекомендую всі прочитати.</a>             
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень.</p>
                        <p className="content__paragraph">1.  Створіть об'єкт, що представляє користувача з властивостями "ім'я" та "вік". Виведіть цей об'єкт на консоль.</p>
                        <p className="content__paragraph">2. Додайте нову властивість "email" до об'єкта користувача з першої задачі. Виведіть змінений об'єкт на консоль.</p>
                        <p className="content__paragraph">3. Доступайтесь до властивостей об'єкта та виведіть їх значення на консоль, використовуючи як крапку, так і оператор квадратних дужок.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть об'єкт, що представляє продукт з властивостями "назва", "ціна" і "кількість". Напишіть функцію, яка обчислює вартість всіх продуктів цього типу (ціна * кількість).</p>
                        <p className="content__paragraph">2. Створіть об'єкт, що представляє автомобіль з властивостями "марка", "модель" і "рік випуску". Напишіть функцію, яка перевіряє, чи є автомобіль старіше 5 років.</p>
                        <p className="content__paragraph">3. Створіть об'єкт, що представляє книгу з властивостями "назва", "автор" і "рік видання". Напишіть функцію, яка виводить інформацію про книгу у зручному форматі.</p>
                        <p className="content__paragraph">Високий рівень.</p>
                        <p className="content__paragraph">1. Створіть об'єкт, що представляє користувача з властивостями "ім'я", "вік" та "список друзів" (масив об'єктів з інформацією про друзів). Напишіть функцію, яка знаходить найдовше ім'я серед друзів цього користувача.</p>
                        <p className="content__paragraph">2. Створіть об'єкт, що представляє замовлення з властивостями "номер", "товари" (масив об'єктів з інформацією про товари) та "загальна вартість". Напишіть функцію, яка обчислює загальну вартість замовлення на основі інформації про товари.</p>
                        <p className="content__paragraph">3. Створіть об'єкт, що представляє школу з властивостями "назва", "адреса" та "учні" (масив об'єктів з інформацією про учнів). Напишіть функцію, яка знаходить середній вік учнів школи.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson22