import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import fir from "./Lesson10__img/fir.jpg"
import sec from "./Lesson10__img/sec.jpg"
import third from "./Lesson10__img/third.jpg"
import four from "./Lesson10__img/four.jpg"
import fifth from "./Lesson10__img/fifth.jpg"
import six from "./Lesson10__img/six.jpg"

export const Lesson10 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Grid</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми розберемо що таке Grid.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке Grid?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">CSS Grid - це потужний інструмент для створення сіток (grid layouts) у веб-дизайні. Він надає можливість розміщати елементи на сторінці в зручний і гнучкий спосіб. У цьому уроці ми дізнаємось, як розпочати використання CSS Grid та створити просту сітку.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Початок роботи з CSS Grid.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Перш за все, додайте CSS Grid контейнеру. Це можна зробити, встановивши властивість display: grid; для бажаного елементу в HTML.</p>
                        <img src={fir} alt="#" className="img"/>
                        <img src={sec} alt="#" className="img"/>                                     
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Додавання рядків та стовпців.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">CSS Grid розділяє сторінку на рядки та стовпці. Ви можете визначити їх кількість та розмір. Наприклад, встановімо два рядки та три стовпці.</p> 
                        <img src={third} alt="#" className="img"/>     
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Розміщення елементів в сітці.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Тепер додайте елементи в свою сітку. Використовуйте властивості grid-row та grid-column, щоб визначити, де розмістити кожен елемент.</p> 
                        <img src={four} alt="#" className="img"/>  
                        <img src={fifth} alt="#" className="img"/>     
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Додавання простору між елементами.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ви можете додати простори між елементами, використовуючи властивості grid-row-gap та grid-column-gap.</p> 
                        <img src={six} alt="#" className="img"/> 
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/css/css_grid.html#gsc.tab=0">Посилання на детальнішу інформацію.</a>       
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати макет <a className="link" target="blank" href="https://www.figma.com/file/BkA5l6sBB37kXEi3FxNlot/Gallery-(Community)?type=design&node-id=0%3A1&mode=design&t=ronwYpFR5pV4OJxs-1">Gallery</a>.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson10