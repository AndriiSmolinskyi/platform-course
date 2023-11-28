import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson30_img/first.png"
import second from "./Lesson30_img/second.png"

export const Lesson0 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Основи ООП в JavaScript 1.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про ООП, класи та успадкування.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">ООП</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Об'єктно-орієнтоване програмування (ООП) - це парадигма програмування, яка базується на концепції об'єктів та класів. В JavaScript ООП відіграє важливу роль через використання класів та об'єктів. Давай розглянемо основні концепції: наслідування, поліморфізм, інкапсуляція.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Класи та об'єкти.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Клас - це шаблон для створення об'єктів. Об'єкт - це екземпляр класу.</p> 
                        <img src={first} alt="#" className="img"/>          
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Наслідування.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Цей принцип дозволяє класам успадковувати властивості та методи інших класів.</p>           
                        <img src={second} alt="#" className="img"/>  
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Створіть клас Shape, який має властивість name та метод getArea(). Потім створіть підкласи Circle і Triangle, які успадковують від Shape та перевизначають метод getArea(), обчислюючи площу для кола і трикутника. Створіть об'єкти цих класів і виведіть їх площу.</p>
                        <p className="content__paragraph">2. Створіть клас Vehicle, який має властивості brand, model, і year. Потім створіть підкласи Car і Bicycle, які успадковують від Vehicle. Додайте методи для встановлення кількості коліс та максимальної швидкості для кожного класу. Створіть об'єкти цих класів і виведіть їх характеристики.</p>
                        <p className="content__paragraph">3. Створіть клас Employee, який має властивості name, position, і salary. Створіть підкласи Engineer і Manager, які успадковують від Employee. Додайте методи для зміни зарплати для обох підкласів. Створіть об'єкти цих класів і виконайте операції зміни зарплати.</p>
                        <p className="content__paragraph">4. Створіть клас Book, який має властивості title, author, і year. Потім створіть підкласи FictionBook і NonFictionBook, які успадковують від Book. Додайте методи для визначення жанру книги. Створіть об'єкти обох підкласів та виведіть їх інформацію разом з жанром.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson0