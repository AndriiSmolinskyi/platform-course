import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson20_img/first.png"
import second from "./Lesson20_img/second.png"
import three from "./Lesson20_img/three.png"
import four from "./Lesson20_img/four.png"

export const Lesson20 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Цикли.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось цикли.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Цикли.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">При розробці скриптів часто виникає потреба виконувати однакові дії багато разів. Наприклад, виводити товари зі списку по одному або виконувати однаковий код для чисел від 1 до 10. Щоб вирішити такі задачі, ми використовуємо конструкцію, яку називають "циклом". Це дозволяє повторювати той самий код декілька разів без необхідності повторного введення його кожен раз.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Цикл while.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Цикл while виконується, поки задана умова істинна. </p>   
                        <img src={first} alt="#" className="img"/>       
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Цикл do while.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Різниться від циклу while, тим що спочатку робить а потім думає.</p> 
                        <img src={second} alt="#" className="img"/>          
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Цикл for.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Найбільш популярний цикл в програмуванні через свою зрозумілість і комфортність.</p> 
                        <img src={three} alt="#" className="img"/>          
                        <img src={four} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">Мінімальний рівень.</p>
                        <p className="content__paragraph">1. Напишіть програму, яка виводить на консоль числа від 1 до 5 за допомогою циклу for.</p>
                        <p className="content__paragraph">2. Створіть програму, яка обчислює суму перших 10 натуральних чисел і виводить результат.</p>
                        <p className="content__paragraph">3. Напишіть програму, яка виводить парні числа від 2 до 10 включно за допомогою циклу for.</p>
                        <p className="content__paragraph">Середній рівень.</p>
                        <p className="content__paragraph">1. Створіть програму, яка визначає факторіал числа, яке користувач вводить (наприклад, факторіал числа 5 - це 5! = 5 * 4 * 3 * 2 * 1).</p>
                        <p className="content__paragraph">2. Напишіть програму, яка генерує та виводить на консоль перші 10 чисел Фібоначчі (послідовність, в якій кожне наступне число є сумою двох попередніх: 0, 1, 1, 2, 3, 5, 8, тощо).</p>
                        <p className="content__paragraph">3. Розробіть програму, яка знаходить всі прості числа в заданому діапазоні і виводить їх.</p>
                        <p className="content__paragraph">Високий рівень.</p>
                        <p className="content__paragraph">1. Напишіть програму, яка перевіряє, чи є введене число паліндромом (наприклад, 121 або 1331).</p>
                        <p className="content__paragraph">2. Створіть програму, яка обчислює суму всіх простих чисел в заданому діапазоні.</p>
                        <p className="content__paragraph">3. Розробіть "гру вгадай число", де програма обирає випадкове число від 1 до 100, а користувач повинен вгадати його. Програма надає підказки про те, чи число більше чи менше введеного користувачем.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson20