import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson41_img/first.png"
import second from "./Lesson41_img/second.png"
import three from "./Lesson41_img/three.png"
import four from "./Lesson41_img/four.png"
import five from "./Lesson41_img/five.png"
import six from "./Lesson41_img/six.png"
import seven from "./Lesson41_img/seven.png"
import eight from "./Lesson41_img/eight.png"
import nine from "./Lesson41_img/nine.png"
import ten from "./Lesson41_img/ten.png"
import eleven from "./Lesson41_img/eleven.png"

export const Lesson41 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1"></h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про postgresql і розробкою простенької апі на node.js. </h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">PostgreSQL</h3>
                    <div className="content__block">
                        <p className="content__paragraph">PostgreSQL - це об'єктно-реляційна система управління базами даних (СУБД). Вона є однією з популярних відкритих СУБД і використовується для зберігання та управління даними у великих і складних програмах. PostgreSQL підтримує ряд продвинутих функцій, включаючи SQL-запити, транзакції, індексацію та багато іншого.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Для початку потрібно завантажити postgresSQL та зареєструватись.</p>  
                        <p className="content__paragraph">Ми будемо використовувати для прикладу сайт з якимось юзером і постами.	</p> 
                        <p className="content__paragraph">Створимо нашу базу данних.</p> 
                        <p className="content__paragraph">Для цього потрібно зайти в папку PostgreSQL, далі в ній є папка bin в якій ми відкриємо наш термінал.</p>          
                        <p className="content__paragraph">Далі нам потрібно авторизуватись такою командою:</p>
                        <img src={first} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Основні команди:</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Команда для показу кирилиці psql \! chcp 1251</p> 
                        <p className="content__paragraph">Команда показати бази даних \l</p>
                        <p className="content__paragraph">Команда підключення до бази даних \connect ім'я_бази_даних</p>
                        <p className="content__paragraph">Команда показати таблиці бази даних \dt</p>
                        <p className="content__paragraph">Команда створення бази даних create database ім'я_бази_даних;</p>
                        <p className="content__paragraph">Команда стоврення таблиці CREATE TABLE ім'я_таблиці()</p>
                        <p className="content__paragraph">Команда вставки даних в таблицю INSERT INTO ім'я_таблиці (колонка1, колонка2, ...) VALUES (значення1, значення2, ...);</p>
                        <p className="content__paragraph">Команда вибору даних SELECT * FROM ім'я_таблиці WHERE умова;</p>
                        <p className="content__paragraph">Команда оновлення даних UPDATE ім'я_таблиці SET колонка1 = нове_значення WHERE умова;</p>
                        <p className="content__paragraph">Команда видалення даних DELETE FROM ім'я_таблиці WHERE умова;</p>          
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Створення бази даних та таблиць</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Першим етапом створимо базу даних командою create database ім'я_бази_даних;</p>  
                        <p className="content__paragraph">Другим підключимось до бази данних \connect ім'я_бази_даних</p> 
                        <p className="content__paragraph">Третім етапом створимо наші таблиці командами в терміналі: </p>  
                        <img src={second} alt="#" className="img"/>        
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Апі на node.js</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Потрібно першим ділом створити пустий проект і ввести команду: npm init –y.
                            Коли ми це зробили потрібно встановити залежності: npm install express p
                            Для розробки буде корисний ще один модуль: npm I –D nodemon
                        </p>    
                        <p className="content__paragraph">Зробимо директорію та підключимось до нашої бази даних:</p> 
                        <img src={three} alt="#" className="img"/> 
                        <p className="content__paragraph">Скріпти для старту</p>     
                        <img src={four} alt="#" className="img"/> 
                        <p className="content__paragraph">Прописаний index.js з роутами</p> 
                        <img src={five} alt="#" className="img"/>  
                        <p className="content__paragraph">Прописані роути( шляхи по яким будуть запити )</p>  
                        <img src={six} alt="#" className="img"/>  
                        <img src={seven} alt="#" className="img"/>  
                        <p className="content__paragraph">Прописані контролери( функції які будуть виконуватись по запитам )</p> 
                        <img src={eight} alt="#" className="img"/>  
                        <img src={nine} alt="#" className="img"/> 
                        <p className="content__paragraph">В цьому прикладі було показано як створити API з використанням postgreSQL, node.js та express. Детальніше можна дізнатись на занятті або подивитись запис заняття.</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Тестування буде в postman</h3>
                    <div className="content__block">
                        <p className="content__paragraph"><a className="link" target="blank" href="https://www.postman.com/downloads/">Для початку його потрібно завантажити та зареєструватись.</a></p>           
                        <img src={ten} alt="#" className="img"/> 
                        <p className="content__paragraph">Тут ми можемо ввести адресу для запиту, тип запиту та що потрібно для запиту.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">CORS</h3>
                    <div className="content__block">
                        <p className="content__paragraph">CORS (Cross-Origin Resource Sharing) - це механізм безпеки веб-браузерів, який дозволяє веб-сторінці запитувати ресурси з іншого домену, ніж той, з якого була завантажена сама сторінка. Без цього механізму веб-браузери блокуватимуть такі запити з огляду на політику одного джерела (Same-Origin Policy).</p> 
                        <p className="content__paragraph">Щоб уникнути цю помилку в розробці фронтенд застосунка, потрібно встановити бібліотеку CORS для нашої API, і вставити ось такий код в index.js:</p>
                        <p className="content__paragraph">Це імпорт зі встановленої бібліотеки const cors = require('cors')</p>          
                        <img src={eleven} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Створити веб-застосунок з використанням React, PostgreSql, Node.js. Застосунок повинен мати систему акаунтів, автохід, можливість робити пости.</p>
                    </div>
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson41