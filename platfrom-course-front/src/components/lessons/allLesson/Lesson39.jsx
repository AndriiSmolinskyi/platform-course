import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson39_img/first.png"

export const Lesson39 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Formik/yup.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про бібліотеки для форм Formik і валідації форми yup.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Formik </h3>
                    <div className="content__block">
                        <p className="content__paragraph">Formik - це бібліотека для обробки форм в React, яка спрощує управління станом форми та її валідацією. Yup - це бібліотека для валідації даних в формах.</p>
                        <p className="content__paragraph">npm install formik yup</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Приклад</h3>
                    <div className="content__block">
                        <img src={first} alt="#" className="img"/> 
                        <p className="content__paragraph">У цьому коді ми використовуємо Formik для створення форми та визначаємо валідаційні правила з допомогою Yup. Форма містить поля для введення імені та електронної пошти, і ми показуємо повідомлення про помилки, якщо дані не відповідають вимогам валідації.</p>           
                        <p className="content__paragraph">При надсиланні форми дані записуються в стан data, і вони відображаються нижче форми, якщо data не є null.</p>   
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати <a className="link" target="blank" href="https://www.figma.com/file/rSHDUQB2FMPg5cR7LGfcQx/Untitled?type=design&node-id=0%3A1&mode=dev">Форму</a>.</p>
                    </div>
                    <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson39