import "./Lesson.scss";

export const Lesson43 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Випускний.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, вже без сьогодні дізнаємось, вітаю з випускним!!!!!!</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Декілька слів від мене.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Вітаю вас з закінченням цього курсу. Це був довгий та непростий шлях, але ви досягли кінця, за що можна і вас похвалити - ви молодці. За цей час ми багато чого дізнались, хтось занурився глибше в програмування, хтось повністю змінив фах, ми найшли нові теплі знаймоства. Бажаю вам гарно рухатись у вашому руслі.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Чи лишаються матеріали курсу?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Так всі матеріали в лмс, діскорді, відео залишаються. В лмс матеріали будуть з часом оновлюватись, і зможете бачити щось нове.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що далі?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Далі буде не менш складний шлях. Рекомендую зайнятись декількома пунктами.</p>  
                        <p className="content__paragraph">Англійська мова - неймовірно важливий аспект в IT сфері.</p> 
                        <p className="content__paragraph">Софт скіли - ваші нетехнічні навчки, як от тайм-менеджмент, спілкування... Неменш важливі.</p> 
                        <p className="content__paragraph">Рекомендую зверстати ще декілька цікавих макетів на стандартному HTML/SCSS/JS.</p>    
                        <p className="content__paragraph">Зануритись глибше в JS.</p>   
                        <p className="content__paragraph">Попрактикуватись вдосталь з React. Найбільш вірний варіант буде робити пет-проекти. Ще буде непогано вивчити технології Redux, Next.js, REST API.</p>    
                        <p className="content__paragraph">Через декілька проектів практики слід братись за оформлення linkedin та створення резюме, не рекомендую тягнути.</p> 
                        <p className="content__paragraph">Найкращі сайти для того, щоб знайти роботу в Україні: Linkedin, Work, Rabota, Dou, Djinni.</p>      
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнього не буде, бажаю успіхів!</h2>
                </div>
            </div>
        </div>    
    )
}

export default Lesson43