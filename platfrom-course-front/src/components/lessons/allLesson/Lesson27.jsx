import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";
import first from "./Lesson27_img/first.png"
import second from "./Lesson27_img/second.png"
import three from "./Lesson27_img/three.png"
import four from "./Lesson27_img/four.png"

export const Lesson27 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Слайдер.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про слайдери.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Слайдер.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">В прикладі будемо використовувати Slick Slider. Це плагін Jquery для створення слайдера будь якої складності.</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                        <img src={three} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Більше прикладів.</p>  
                        <a className="link" target="blank" href="https://denis-creative.com/nastrojka-slick-carousel-slick-slider/">Посилання 1.</a>          
                        <a className="link" target="blank" href="https://kenwheeler.github.io/slick/">Посилання 2.</a> 
                        <p className="content__paragraph">Також можна створити слайдер за допомогою дом і подіям, без бібліотек.</p>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати <a className="link" target="blank" href="https://www.figma.com/file/IDyJC5Eiqm2pzxCWO3KRzi/Antic-%E2%80%A2-Decoration-Landing-Page-(Community)?node-id=0%3A1&mode=dev">макет</a>.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson27