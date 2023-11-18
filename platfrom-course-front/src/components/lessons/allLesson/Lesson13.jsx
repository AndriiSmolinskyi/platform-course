import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";
import example1 from "./Lesson13_img/example1.png"
import example2 from "./Lesson13_img/example2.png"
import example3 from "./Lesson13_img/example3.png"

export const Lesson13 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Респонсивність 1.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про адаптивну навігацію.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Оглянемо декілька понять.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Бургер-меню: Це іконка з трьома горизонтальними смугами, яка служить символом для меню. Коли користувач клікає на цю іконку, навігаційне меню відкривається.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Спадне меню (Dropup): Це використовується для багаторівневої навігації. Підпункти меню з'являються, коли користувач наводить курсор на відповідний пункт.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Меню-завіса (Curtain Menu): Це повноекранне меню з плавними анімаціями та переходами.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Бічне меню (Collapse Sidebar): Це меню, яке випадає збоку сторінки і зазвичай займає певну частину екрану.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Приклад коду без стилів для інтерактивного меню.</h3>
                    <div className="content__block">
                        <img src={example1} alt="#" className="img"/>
                        <img src={example2} alt="#" className="img"/>
                        <img src={example3} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати <a className="link" target="blank" href="https://www.figma.com/file/s4RqpMWogbpHTC0COqAirQ/Bank-Dashboard-(Community)?node-id=0%3A1&mode=dev">Макет</a>.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson13