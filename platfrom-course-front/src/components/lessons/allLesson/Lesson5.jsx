import React from 'react';
import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

const Lesson5 = ( {lessonId, groupId} ) => {
    return (
        <div className="lesson-block">
            <h1 className="title-h1">Форми.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось що таке HTML Forms</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке форми?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Форми в HTML дозволяють користувачам взаємодіяти з веб-сайтом, надсилати дані на сервер і отримувати результати. Вони включають в себе різні елементи та атрибути, що регулюють їхню роботу.</p>
                        <p className="content__paragraph">Форма має наступну структуру:</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;form action="обробник.php" method="POST"&gt;<br />
                                &nbsp;&nbsp;&lt;label for="ім'я"&gt;Ім'я:&lt;/label&gt;<br />
                                &nbsp;&nbsp;&lt;input type="text" id="ім'я" name="ім'я" required /&gt;<br />
                                &nbsp;&nbsp;&lt;label for="пароль"&gt;Пароль:&lt;/label&gt;<br />
                                &nbsp;&nbsp;&lt;input type="password" id="пароль" name="пароль" required /&gt;<br />
                                &nbsp;&nbsp;&lt;input type="submit" value="Увійти" /&gt;<br />
                                &lt;/form&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Основні атрибути форми:</p>
                        <p className="content__paragraph">
                            - action: вказує URL обробника форми.<br />
                            - method: визначає HTTP-метод (GET або POST) для надсилання даних.<br />
                            - name: ім'я поля форми для ідентифікації даних на сервері.<br />
                            - type: тип введеного даних, такий як "text" або "password".<br />
                            - id: унікальний ідентифікатор поля для стилізації та посилання з JavaScript або CSS.<br />
                            - label: використовується для створення текстового опису поля форми.
                        </p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Більше формових елементів</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Текстове поле (input type="text):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;input type="text" name="username" id="username" placeholder="Введіть ваше ім'я" required /&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Пароль (input type="password):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;input type="password" name="password" id="password" placeholder="Введіть пароль" required /&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Текстова область (textarea):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;textarea name="comment" id="comment" placeholder="Ваш коментар"&gt;&lt;/textarea&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Вибір одного варіанту (input type=radio):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;input type="radio" name="gender" id="male" value="male" /&gt;<br />
                                &lt;label for="male"&gt;Чоловік&lt;/label&gt;<br />
                                &lt;input type="radio" name="gender" id="female" value="female" /&gt;<br />
                                &lt;label for="female"&gt;Жінка&lt;/label&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Вибір кількох варіантів (input type=checkbox):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;input type="checkbox" name="hobby" id="reading" value="reading" /&gt;<br />
                                &lt;label for="reading"&gt;Читання&lt;/label&gt;<br />
                                &lt;input type="checkbox" name="hobby" id="gaming" value="gaming" /&gt;<br />
                                &lt;label for="gaming"&gt;Гра в ігри&lt;/label&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Випадаючий список (select):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;select name="country" id="country"&gt;<br />
                                &nbsp;&lt;option value="usa"&gt;Сполучені Штати&lt;/option&gt;<br />
                                &nbsp;&lt;option value="canada"&gt;Канада&lt;/option&gt;<br />
                                &nbsp;&lt;option value="uk"&gt;Сполучене Королівство&lt;/option&gt;<br />
                                &lt;/select&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Кнопка відправки (input type=submit):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;input type="submit" value="Відправити" /&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Кнопка для скидання форми (input type=reset):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;input type="reset" value="Скинути" /&gt;
                            </code>
                        </p>
                        <p className="content__paragraph">Поле для завантаження файлу (input type=file):</p>
                        <p className="content__paragraph">
                            <code>
                                &lt;input type="file" name="file" id="file" /&gt;
                            </code>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зверстати форму:</p>
                        <a className="link" target="blank" href="https://docs.google.com/document/d/1m7Sb9s5yQ_juWCKrDWbz8pxbQ06Ni4BaCab-4jsI_Cc/edit?usp=sharing">Посилання на завдання</a>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>
    );
}

export default Lesson5;