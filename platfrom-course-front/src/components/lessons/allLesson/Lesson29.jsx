import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson0 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Вебсховище.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось про вебсховище.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Вебсховище.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Взагалі вебсховище потрібно щоб зберігати маленькі данні протягом певного часу. Для прикладу логін і пароль чи користувач заходив, користувацьких даних, останніх переглянутих сторінок тощо.</p>
                        <p className="content__paragraph">Існує три типи: localstorage, sessionstorage, coockie. Різниця між тим локал і сешен в тому, що сешен стосується тільки сесії, а локал для довготривалого зберігання.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Localstorage.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">LocalStorage.setItem(key, value): Зберігання даних з ключем key і значенням value.</p>         
                        <p className="content__paragraph">LocalStorage.getItem(key): Отримання даних за ключем key.</p> 
                        <p className="content__paragraph">LocalStorage.removeItem(key): Видалення даних за ключем key.</p> 
                        <p className="content__paragraph">LocalStorage.clear(): Очищення всього Local Storage.</p>   
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Coockies</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Створення та встановлення кукі.</p>     
                        <p className="content__paragraph">document.cookie = "username=John";</p>       
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Отримання кукі.</p>   
                        <p className="content__paragraph">const username = document.cookie; console.log(username); // Виведе "username=John"</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Терміни дії кукі.</p>   
                        <p className="content__paragraph">document.cookie = "username=John; expires=Thu, 01 Jan 2099 00:00:00 UTC";</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Видалення кукі</p>   
                        <p className="content__paragraph">document.cookie = "username=John; expires=Thu, 01 Jan 1970 00:00:00 UTC";</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Безпека та обмеження кукі. Кукі можуть бути заборонені через параметри безпеки браузера. HTTP-Only куки не доступні через JavaScript.</p>           
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Збереження користувацьких налаштувань. Ваша мета - створити сторінку з користувацькими налаштуваннями (наприклад, кольорова схема, розмір шрифту, мова), які користувач може змінювати. Коли користувач вносить зміни, зберігайте їх у Local Storage. При кожному завантаженні сторінки перевірте Local Storage і застосовуйте налаштування користувача за замовчуванням.</p>
                        <p className="content__paragraph">2. Збереження списку завдань (to-do list). Створіть додаток для управління списком завдань. Користувач може додавати, видаляти та позначати завдання як виконані. Зберігайте цей список завдань в Local Storage, щоб дані не зникали при оновленні сторінки. Кожного разу, коли користувач додає або видаляє завдання, оновлюйте дані в Local Storage та оновлюйте відображення списку завдань.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson0 