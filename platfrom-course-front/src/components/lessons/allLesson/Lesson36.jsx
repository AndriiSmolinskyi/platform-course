import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson36_img/first.png"
import second from "./Lesson36_img/second.png"
import three from "./Lesson36_img/three.png"

export const Lesson0 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Рендеринг списків і умов.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про рендер списків і умовний рендер.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">List.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">List - це компонент React, який дозволяє відображати список елементів. Він приймає в якості аргументів масив елементів, які він буде відображати.</p>
                        <p className="content__paragraph">Приклади.</p>
                        <img src={first} alt="#" className="img"/> 
                        <img src={second} alt="#" className="img"/> 
                        <p className="content__paragraph">Основні властивості List.</p>
                        <p className="content__paragraph">children: Масив елементів, які будуть відображені.</p>
                        <p className="content__paragraph">key: Ключ для кожного елемента в масиві. Ключі необхідні для того, щоб React міг правильно відстежувати зміни в масиві.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Conditional rendering.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Conditional rendering - це можливість відобразити компонент лише за умови, що певна умова виконується.</p> 
                        <img src={three} alt="#" className="img"/>   
                        <p className="content__paragraph">Основні оператори умовного рендерингу</p> 
                        <p className="content__paragraph">&&: Оператор логічного і. Відображає компонент лише за умови, що обидва операнди true.</p> 
                        <p className="content__paragraph">||: Оператор логічного або. Відображає компонент лише за умови, що один з операндів true.</p> 
                        <p className="content__paragraph">!: Оператор логічного заперечення. Відображає компонент лише за умови, що операнд false.</p> 
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати макет з випадаючими вікнами, використовувати рендер списків та умовний рендер.<a className="link" target="blank" href="https://www.figma.com/file/AilaUWMPIEotsLTw5L6vZ5/Untitled?type=design&node-id=0%3A1&mode=dev">Макет</a>.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson0