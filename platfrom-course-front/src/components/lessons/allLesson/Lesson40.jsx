import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";
import first from "./Lesson40_img/first.png"
import second from "./Lesson40_img/second.png"
import three from "./Lesson40_img/three.png"

export const Lesson40 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">React context.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось контекст в реакті.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Контекст.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Контекст в React - це механізм для передачі даних вниз по дереву компонентів без необхідності передавати пропси через кожен проміжний компонент. Він дозволяє створити "контекстний" об'єкт, який містить дані, і зробити цей об'єкт доступним для всіх компонентів у дереві.</p>
                        <p className="content__paragraph">Простими словами сховище для збереження даних і використання в любій компоненті.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Створення контексту.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Спочатку створимо контекст і провайдер, який міститиме дані, які ми хочемо передати між компонентами. Наприклад, ми можемо створити файл UserContext.js:</p>           
                        <img src={first} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Використання постачальника контексту.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Щоб забезпечити дані користувача, вам потрібно використовувати UserProvider в кореневому компоненті вашої програми, наприклад, в index.js:</p>           
                        <img src={second} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Використання контексту в компонентах.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Тепер можемо використовувати контекст у наших компонентах. Наприклад, ми можемо створити компонент UserProfile, який відображатиме інформацію про користувача:</p>           
                        <img src={three} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Створити такий застосунок з акаунтами. Коли користувач заходить на сайт то зявляється три поля імя, пошта, пароль(зробити за допомогою форміка). Коли ми клацнули на кнопку ввійти данні записуються в контекст юзера, і на сторінці хом виводяться імя і пошта юзера. Важливо зазначити що дані повинні зберігатись в localstorage,cookie тощо. Для того, щоб коли користувач після перезавнтаження застосунка з акаунта не виходило. Буде корисно щоб міняти структура роутінга після входу в акаунт, щоб був заблокований роут назад до форми.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson40