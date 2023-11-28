import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson31_img/first.png"
import second from "./Lesson31_img/second.png"

export const Lesson0 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Основи ООП в JavaScript 2.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось більше про ООП, поліморфізм, інкапсуляцію.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Поліморфізм.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Поліморфізм - це можливість різних об'єктів викликати однойменні методи, але робити це по-різному. У JavaScript це виявляється в тому, як різні класи перевизначають однойменні методи. Давай розглянемо це на прикладі.</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">У цьому прикладі Shape - базовий клас з методом getArea(), а Circle та Rectangle успадковують від нього, перевизначаючи метод getArea(). В результаті об'єкти circle та rectangle викликають однойменний метод, але повертають різні значення, відповідно до своїх класів. Це приклад поліморфізму, оскільки об'єкти різних класів використовують один метод з різними реалізаціями.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Інкапсуляція.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Інкапсуляція відноситься до обмеження доступу до деяких частин класу. В JavaScript, можна використовувати модифікатори доступу, такі як private, protected, та public.</p>      
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">У цьому прикладі ми використовуємо приватне поле #balance для збереження балансу рахунку. Інші методи, такі як deposit, withdraw, і getBalance, взаємодіють з цим полем. Приватні поля недоступні ззовні класу, що ілюструє інкапсуляцію.</p>       
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                    <p className="content__paragraph">1. Створіть клас Transport, який має властивість speed. Додайте метод getSpeed(), який повертає значення швидкості. Створіть підкласи Car і Bicycle, які успадковують від Transport. Додайте конструктори для кожного підкласу, які встановлюють швидкість. Створіть об'єкти обох підкласів і виведіть їхню швидкість.</p>
                    <p className="content__paragraph">2. Створіть базовий клас Instrument, який має метод play(). Створіть підкласи Piano, Guitar і Drums, які успадковують від Instrument. Кожен підклас має перевизначити метод play() і вивести різний звук для кожного інструменту.</p>
                    <p className="content__paragraph">3. Створіть клас BankAccount, який має властивості balance і accountNumber. Додайте методи deposit(amount) і withdraw(amount) для здійснення операцій з рахунком. Зберігайте баланс і номер рахунку як приватні властивості та забезпечуйте інкапсуляцію. Створіть підкласи CheckingAccount і SavingsAccount, які успадковують від BankAccount. Створіть об'єкти обох підкласів і виконайте операції з депозитами та виводами.</p>
                    <p className="content__paragraph">4. Створіть клас Subject, який має властивість subjectName. Створіть підкласи MathSubject, ScienceSubject і LiteratureSubject, які успадковують від Subject. Додайте приватну властивість teacherName для кожного підкласу. Створіть методи для встановлення вчителя для кожного предмету та методи для виведення інформації про предмет і вчителя. Забезпечте інкапсуляцію даних про вчителя.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson0