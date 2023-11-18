import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";

export const Lesson0 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1"></h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph"></p>
                        <a className="link" target="blank" href=""></a>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph"></p>           
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. </p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}
//<a className="link" target="blank" href=""></a> 
// <img src={justify} alt="#" className="img"/>
// import example1 from "./Lesson14_img/example1.png"
export default Lesson0