import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson38_img/first.png"
import second from "./Lesson38_img/second.png"
import three from "./Lesson38_img/three.png"

export const Lesson0 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">React routing.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про перехід між сторінками React router.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Routing.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Встановлення бібліотеки.</p>
                        <p className="content__paragraph">npm install react-router-dom</p>
                    </div>
                    <div className="content__block">
                        <img src={first} alt="#" className="img"/> 
                        <p className="content__paragraph">Тут ми додали HashRouter.</p>           
                    </div>
                    <div className="content__block">
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Routes це блок для маршуризаторів які ведуть на певні адреси. Path це не точне знаходження компонети, а умовне для подальших переходів.</p>           
                    </div>
                    <div className="content__block">
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Для посилання на якусь сторінку використовується NavLink.</p>           
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Створити веб-застосунок, де зверху буде хедер і можна буде ним ходити по різним сторінкам. Як ідея можна зробити типу магазину. Перша сторінка Home. Далі About, Cart, Like, Orders.</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson0