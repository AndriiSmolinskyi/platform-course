import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson25_img/first.png"

export const Lesson0 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">DOM.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось DOM дерево.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">DOM.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">DOM - об'єктна модель документа (Document Object Model).</p>
                        <img src={first} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Пошук і зчитування.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Щоб найти і зчитати якийсь html Dom елемент є багато медоів, але ми будемо використовувати найбільш практичний QuerySelector. Його перевага в тому, що він може зчитувати тег, клас і атрибут.</p>           
                        <p className="content__paragraph">В данному прикладі ми зчитаємо за класом, як бачимо використовуємо для цього крапочку, як в css</p>  
                        <p className="content__paragraph">const element = document.querySelector('.example-class');</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Зміна вмісту і атрибутів.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Зміна тексту та HTML-вмісту: Використання innerText та innerHTML для зміни тексту та HTML-вмісту елементів.</p>           
                        <p className="content__paragraph">element.innerText = 'Новий текст';</p> 
                        <p className="content__paragraph">Приклад надання атрибуту.</p>  
                        <p className="content__paragraph">element.setAttribute('src', 'новий-шлях-до-зображення.jpg');</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Створення елемента та додавання в DOM.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Створення нового елемента: Використання document.createElement() для створення нового елемента.</p>       
                        <p className="content__paragraph">Додавання елемента до DOM: Використання методів appendChild() або insertBefore() для додавання нового елемента до сторінки.</p>   
                        <p className="content__paragraph">const newElement = document.createElement('div');</p>   
                        <p className="content__paragraph">newElement.textContent = 'Новий елемент';</p>   
                        <p className="content__paragraph">document.body.appendChild(newElement);</p>       
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Зміна стилів і додавання класів.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Зміна стилів елемента: Робота зі стилями елементів через властивість style.</p>          
                        <p className="content__paragraph">Додавання та видалення класів: Використання властивості classList для додавання та видалення класів.</p>  
                        <p className="content__paragraph">newElement.style.color = 'red';</p>  
                        <p className="content__paragraph">newElement.classList.add('highlighted');</p>   
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Видалення елементів.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Видалення елементів з DOM: Використання методів removeChild() або remove() для видалення елементів з DOM.</p>     
                        <p className="content__paragraph">element.remove();</p>      
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Рекомендовано для прочитання.</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://uk.javascript.info/document">Для кращого розуміння можна прочитати все.</a>          
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень.</p>
                        <p className="content__paragraph">1. Створіть ul список цього домашнього завдання. За допомогою JS змініть текст з Мінімальний рівень на Мінімальний рівень виконано</p>
                        <p className="content__paragraph">2. Добавте якусь задачу до Мінімального рівня за допомогою JS.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть функцію яка видаляє елемент зі списку.</p>
                        <p className="content__paragraph">2. Створіть карточку для юзера(Name City) за допомогою js та виведіть її.</p>
                        <p className="content__paragraph">Високий рівень.</p>
                        <p className="content__paragraph">1. Створіть масив обєктів user де буде в обєкті Name City, мінімум 5 обєктів. Потрібно використовуючи минулу картчоку вивести всі карточки..</p>
                        <p className="content__paragraph">2. Створити розмітку input input button(onclick). Полі повинні приймати імя юзера та його місто. Далі при кліку на кнопку має вивестись в на сторінку новий юзер(потрібно написати функцію).</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson0