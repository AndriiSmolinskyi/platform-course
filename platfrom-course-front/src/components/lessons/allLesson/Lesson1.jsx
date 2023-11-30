import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson1 = ( {lessonId, groupId} ) => {


    return(
        <div className="lesson-block">
            <h1 className="title-h1">Вступний урок.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3"> Привіт, вітаємо з початком навчання на наших курсах! З інформацією перед заняттям потрібно обовязково ознайомлюватись.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">-Верстка HTML5/CSS/SCSS і дочірні технології, щоб навчитись красивий сайт.</p>
                        <p className="content__paragraph">-JavaScript, навчимось робити інтерактивні сайти для взаємодії користувача.</p>
                        <p className="content__paragraph">-React, неймовірно потужний інструмент для розробки великих проектів.</p>
                    </div>    
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Платформа курсу і матеріали.</h3>
                    <div className="content__block">
                        <h4 className="content__title-h4">Платформа </h4>
                        <p className="content__paragraph">Базовий матеріал для підготовки до заняття буде на платформі.</p>
                        <p className="content__paragraph">Домашнє завдання здається на платформі.</p>
                        <p className="content__paragraph">Корисні посилання також будуть на платформі або в діскорд сервері.</p>
                    </div>
                    <div className="content__block">
                        <h4 className="content__title-h4">Діскорд</h4>
                        <p className="content__paragraph">Друга і напевно основна платформа буде діскорд.</p>
                        <p className="content__paragraph">Будуть чати.</p>
                        <p className="content__paragraph">Там можна буде до мене звернутись.</p>
                        <p className="content__paragraph">Будуть відеозаписи з заняття.</p>
                        <p className="content__paragraph">Буде важлива інформація.</p>
                        <p className="content__paragraph">Як завантажити діскорд </p>
                        <a className="link" href="https://www.youtube.com/watch?v=h-elf7zumL8&ab_channel=%D0%9A%D0%BE%D0%BB%D0%B5%D0%BA%D1%86%D1%96%D0%BE%D0%BD%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%26%D0%86%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82" target="blank">Посилання на відео</a>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Visual studio code</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Це редактор кода в якому ми будемо навчитись. Встановити обовязково.</p>
                        <p className="content__paragraph">Посилання на завантаження: <a className="link" target="blank" href="https://code.visualstudio.com/">https://code.visualstudio.com/</a></p>
                        <p className="content__paragraph">Відеогайд: <a className="link" target="blank" href="https://www.youtube.com/watch?v=M-WeTRvLRtc&ab_channel=CodeUA">https://www.youtube.com/watch?v=M-WeTRvLRtc&ab_channel=CodeUA</a></p>
                    </div>   
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Корисна інформація</h3>
                    <div className="content__block">
                        <a className="link" target="blank" href="https://osvitoria.media/experience/vchymosya-vchytysya-yak-nalashtuvaty-svij-mozok-na-efektyvne-navchannya/">Вчимося вчитися: Як налаштувати свій мозок на ефективне навчання</a>
                        <a className="link" target="blank" href="https://womo.ua/yak-efektivno-vchitisya-12-porad-vid-spikeriv-ted/">Як ефективно вчитися: 12 порад від спікерів TED</a>
                        <a className="link" target="blank" href="https://www.village.com.ua/village/knowledge/book-of-the-week/277083-10-pravil-yak-treba-vchitisya-z-novoyi-knigi-barbari-okli">10 правил, як треба вчитися, з нової книги Барбари Оклі</a>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Як успішно закінчити курс?</h3>
                    <p className="content__paragraph">Здати 90% домашніх завдань і три проекта.</p>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Перечитати матеріал уроку.</p>
                        <p className="content__paragraph">2. Завантажити та знайомитись з Discord.</p>
                        <p className="content__paragraph">3. Завантажити та знайомитись з VS Code.</p>
                        <p className="content__paragraph">4. Надіслати в домашнє завдання маленьке есе про себе( хто я, де живу, цілі, уподобання, чому фронтенд і айті, імя і так далі, минулий досвід ).</p>
                        <a className="link" target="blank" href="https://www.youtube.com/watch?v=-h9sgYfCz14&ab_channel=AroundBlender3D">5. Завантажити плагін для Vs Code live server.</a>
                    </div>                         
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson1