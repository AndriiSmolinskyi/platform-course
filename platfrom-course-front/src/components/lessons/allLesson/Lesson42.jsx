import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson42 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Проект 3.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні про фінальний проект.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Вимоги до проекту.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">1. Створений на React.</p>
                        <p className="content__paragraph">2. Респонсивність.</p>
                        <p className="content__paragraph">3. Захостити на любий з хостингів, для прикладу github pages.</p>
                        <p className="content__paragraph">4. Додаток має бути оптимізованим.</p>
                        <p className="content__paragraph">5. Тема довільна. Але щоб я хотів бачити в додатку - це routing, formik, context, axios request, user system.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Кілька ідей.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">1. Список завдань (To-Do List):</p>  
                        <p className="content__paragraph">Створіть додаток для ведення списку завдань.</p>   
                        <p className="content__paragraph">Додайте можливість додавати, видаляти та відзначати завдання як виконані.</p>             
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">2. Погода:</p>       
                        <p className="content__paragraph">Інтегруйте зовнішній API погоди.</p>
                        <p className="content__paragraph">Відображайте поточну погоду та прогноз на певний період.</p>
                        <p className="content__paragraph">Додайте можливість вибору місцезнаходження.</p>    
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">3. Сайт з фільмами:</p>  
                        <p className="content__paragraph">Інтегруйте зовнішній API фільмів.</p>
                        <p className="content__paragraph">Додайте оптимізований пошук фільмів.</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">4. Онлайн-магазин:</p>      
                        <p className="content__paragraph">Розробіть простий онлайн-магазин з каталогом товарів.</p> 
                        <p className="content__paragraph">Додайте можливість додавання товарів у кошик та оформлення замовлення.</p>                           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">5. Фінансовий трекер витрат:</p>  
                        <p className="content__paragraph">Створіть додаток для відстеження фінансових витрат та прибутків.</p> 
                        <p className="content__paragraph">Додайте можливість додавання та категоризації операцій.</p>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">І ще багато-багато різних ідей.</p>           
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зробити фінальний проект та вчасно здати, бажаю успіхів:).</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson42