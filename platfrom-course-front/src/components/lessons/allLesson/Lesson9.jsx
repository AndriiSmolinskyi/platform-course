import "./Lesson.scss";
import { LessonBtn } from "../LessonBtn";
import justify from './Lesson9__img/justify.png'
import align from './Lesson9__img/align.webp'

export const Lesson9 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Flexbox.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми розберемо що таке Flexbox.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке Flexbox?</h3>
                    <p className="content__paragraph">Flexbox - це потужний інструмент для розміщення елементів на сторінці веб-сайту. Він працює з контейнерами і елементами всередині них, дозволяючи легко керувати розміщенням і розтягуванням.</p>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Display.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">азвичай CSS властивість display має багато можливих значень, але для використання Flexbox ви встановлюєте її на flex або inline-flex. Коли ви встановлюєте display на flex, це дозволяє вам розміщувати елементи в режимі блоку, а коли ви використовуєте inline-flex, це подібно до режиму inline-block. Без display: flex, нічого не буде працювати</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">flex-direction</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ця властивість може змінювати напрямок головної осі (main axis), вздовж якої розташовуються флекс елементи (flex item)</p>           
                        <p className="content__paragraph">Можливі закінчення:</p> 
                        <p className="content__paragraph">row – це значення за замовчуванням, і має елементи зліва направо;</p> 
                        <p className="content__paragraph">row-reverse – справа наліво;</p> 
                        <p className="content__paragraph">column – зверху донизу;</p> 
                        <p className="content__paragraph">column-reverse – знизу нагору.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">flex-wrap</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ця властивість flex-wrap дозволяє розміщувати дочірні елементи (flex items) в різні ряди (або колонки, якщо встановлено flex-direction: column або flex-direction: column-reverse). За замовчуванням, всі елементи розташовані в одному ряду (або колонці).</p>     
                        <p className="content__paragraph">Існують такі значення для flex-wrap:</p>
                        <p className="content__paragraph">nowrap (за замовчуванням): Усі дочірні елементи розташовані в одному ряду або колонці, горизонтально або вертикально.</p>
                        <p className="content__paragraph">wrap: Елементи автоматично переносяться на новий ряд зверху вниз, якщо вони не поміщаються в поточному ряду.</p>
                        <p className="content__paragraph">wrap-reverse: Схоже на wrap, але елементи переносяться на новий ряд знизу вгору.</p>      
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">justify-content</h3>
                    <div className="content__block">
                        <p className="content__paragraph">justify-content - це дуже корисна і популярна властивість, яка визначає, як елементи вирівнюватимуться вздовж головної осі (main axis) в контейнері Flexbox.</p>  
                        <p className="content__paragraph">За замовчуванням, елементи Flexbox намагаються зайняти всю доступну ширину контейнера, іноді залишаючи порожній простір. В таких випадках justify-content допомагає контролювати розташування елементів.</p> 
                        <p className="content__paragraph">Ось найпоширеніші значення justify-content:</p> 
                        <p className="content__paragraph">flex-start: Елементи вирівнюються вздовж початку головної осі (за замовчуванням ліворуч).</p> 
                        <p className="content__paragraph">flex-end: Вирівнювання елементів вздовж кінця головної осі (протилежно до flex-start).</p> 
                        <p className="content__paragraph">center: Вирівнювання елементів в центрі контейнера.</p> 
                        <p className="content__paragraph">left і right: Вирівнювання вздовж лівого або правого краю відповідно.</p> 
                        <p className="content__paragraph">space-between: Елементи розподіляються рівномірно вздовж головної осі, з першим на початку і останнім в кінці.</p> 
                        <p className="content__paragraph">space-around: Аналогічно до space-between, але існує порожній простір перед першим елементом і після останнього, рівний половині відстані між блоками.</p> 
                        <p className="content__paragraph">space-evenly: Елементи розташовуються так, щоб відстань між ними та від контейнера була однаковою.</p>          
                        <div className="content__img">
                            <img src={justify} alt="#" className="img"/>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">align-items</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ця властивість впливає на вирівнювання елементів, але вона діє на поперечну ось (cross axis). Вона має різні параметри:</p>   
                        <p className="content__paragraph">stretch - це значення за замовчуванням і розтягує елементи flex, щоб вони займали всю доступну ширину вздовж поперечної осі.</p> 
                        <p className="content__paragraph">flex-start - вирівнює елементи з одного краю поперечної осі (cross start).</p> 
                        <p className="content__paragraph">flex-end - вирівнює елементи з іншого краю поперечної осі (cross end).</p> 
                        <p className="content__paragraph">center - розміщує елементи в центрі поперечної осі.</p> 
                        <p className="content__paragraph">baseline - розміщує елементи так, щоб їх базисні лінії співпадали.</p>         
                        <div className="content__img">
                            <img src={align} alt="#" className="img"/>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Детальніше прочитати.</h3>
                    <div className="content__block">  
                        <a className="link" target="blank" href="https://romul.name/blog/posibnyk-z-css-flexbox/">Посилання 1.</a> 
                        <a className="link" target="blank" href="https://w3schoolsua.github.io/css/css3_flexbox_container.html#gsc.tab=0">Посилання 2.</a> 
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Зврестати <a className="link" target="blank" href="https://www.figma.com/file/FWbaShhlNmKbS7sQV02bpT/web%3B-Landing-Page-example-(Community)?node-id=1%3A135&mode=dev">Посилання.</a></p>
                        <p className="content__paragraph">2. Пройти гру <a className="link" target="blank" href="https://flexboxfroggy.com/#uk">Посилання.</a></p>
                    </div>
                    <LessonBtn></LessonBtn>
                </div>
            </div>
        </div>    
    )
}

export default Lesson9