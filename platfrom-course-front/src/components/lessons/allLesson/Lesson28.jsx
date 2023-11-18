import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";
import first from "./Lesson28_img/first.png"
import second from "./Lesson28_img/second.png"

export const Lesson28 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Ajax</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось ajax і запити.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Json.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Дані приходять і посилаються у форматі JSON. Для того щоб з ним співпрацювати потрібно використовувати два основних методи. </p>
                        <p className="content__paragraph">Для того щоб перевести данні у JSON формат використовують метод JSON.stringify(ваші данні).</p>
                        <p className="content__paragraph">Для того щоб перевести данні з JSON формата використовують метод JSON.parse (ваші данні).</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Запити.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Fetch потрібно для того, щоб робити запити.</p>  
                        <p className="content__paragraph">Catch для обробки помилок.</p> 
                        <img src={first} alt="#" className="img"/>  
                        <p className="content__paragraph">Є ще такий метод, який дає змогу прямо в блоці catch виконувати багато різних операцій JS.</p>       
                        <img src={second} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Створити сайт з фільмами. Дані взяти з апі <a className="link" target="blank" href="https://www.omdbapi.com/">Посилання</a>. Потрібно зареєструватись щоб отримати ключ до апі.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson28