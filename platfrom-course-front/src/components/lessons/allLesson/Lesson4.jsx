import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";

export const Lesson4 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Семантика, посилання, якорі.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось що таке семантика та семантичні теги.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке семантика?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">У веб-розробці, семантика в HTML означає використання правильних тегів для правильних речей. Наприклад, якщо ви використовуєте тег &lt;h1&gt, то це зазвичай означає, що це заголовок першого рівня, і це важливий текст на сторінці.</p>
                        <p className="content__paragraph">Семантика важлива для двох основних речей:</p>
                        <p className="content__paragraph">Розуміння контенту: Використання правильних тегів допомагає браузерам та пошуковим системам краще розуміти ваш контент. Це може покращити SEO та інші аспекти видимості вашого вмісту в Інтернеті.</p>
                        <p className="content__paragraph">Доступність: Правильна семантика допомагає людям з інвалідністю, таким як сліпі або слабозорі, краще розуміти та взаємодіяти з вашим веб-сайтом. Вона робить ваш сайт більш доступним для всіх користувачів.</p>
                        <p className="content__paragraph">Отже, семантика в HTML допомагає створювати структурований та доступний вміст в Інтернеті.</p>
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/html/html5_semantic_elements.html">Посилання.</a>
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/html/html5_video.html">Посилання.</a>
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/html/html5_audio.html">Посилання.</a>
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/html/html_youtube.html">Посилання.</a>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Найбільш важливі семантичні теги</p>
                        <p className="content__paragraph">&lt;section&gt;</p>
                        <p className="content__paragraph">&lt;article&gt;</p>
                        <p className="content__paragraph">&lt;header&gt;</p>
                        <p className="content__paragraph">&lt;footer&gt;</p>
                        <p className="content__paragraph">&lt;aside&gt;</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Посилання в HTML.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Посилання (&lt;a&gt; тег):</p>
                        <p className="content__paragraph">href атрибут вказує URL, на який посилається посилання.</p>
                        <p className="content__paragraph">target атрибут визначає, як відкривати посилання:</p>
                        <p className="content__paragraph">_blank: Відкрити в новому вікні (це відноситься до відкриття у новому вікні браузера).</p>
                        <p className="content__paragraph">_self: Відкрити в поточному вікні (за замовчуванням).</p>
                        <p className="content__paragraph">_parent: Відкрити в батьківському фреймі, якщо він є.</p>
                        <p className="content__paragraph">_top: Відкрити в головному вікні браузера.</p>
                        <p className="content__paragraph">Приклад: &lt;a href="https://www.example.com" target="_blank"&gt;Приклад посилання&lt;/a&gt;</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Якорі (&lt;a&gt; тег з name або &lt;div&gt;/&lt;p&gt; з id):</p>
                        <p className="content__paragraph">name атрибут (для &lt;a&gt; тега) або id атрибут (для інших тегів) визначає якісь певні точки на сторінці.</p>
                        <p className="content__paragraph">Для створення якоря: &lt;a name="якорь"&gt;&lt;/a&gt; або &lt;div id="якорь"&gt;&lt;/div&gt;</p>
                        <p className="content__paragraph">Щоб створити посилання на якір: &lt;a href="#якорь"&gt;Перехід до якоря&lt;/a&gt;</p>
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/html/html_links.html">Детальніше прочитати:</a>
                        <a className="link" target="blank" href="https://docs.google.com/document/d/e/2PACX-1vQqr00Os8ivExfXZDbwD9bQvYozUdKsOyeM54dF0ZhS1vp75eP2k7mNSUeUsJ8Un3hUqRRAMGTpxpdC/pub">Приклад семантичного коду</a>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати семантично якусь статтю. Або зробити своє резюме семантичним.</p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson4