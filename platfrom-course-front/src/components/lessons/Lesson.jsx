import "./LessonList.scss";
import { useState } from "react";
import Lesson1 from "./allLesson/Lesson1";
import Lesson2 from "./allLesson/Lesson2";
import Lesson3 from "./allLesson/Lesson3";
import Lesson4 from "./allLesson/Lesson4";
import Lesson5 from "./allLesson/Lesson5";
import Lesson6 from "./allLesson/Lesson6";
import Lesson7 from "./allLesson/Lesson7";
import Lesson8 from "./allLesson/Lesson8";
import Lesson9 from "./allLesson/Lesson9";
import Lesson10 from "./allLesson/Lesson10";
import Lesson11 from "./allLesson/Lesson11";
import Lesson12 from "./allLesson/Lesson12";
import Lesson13 from "./allLesson/Lesson13";
import Lesson14 from "./allLesson/Lesson14";
import Lesson15 from "./allLesson/Lesson15";
import Lesson16 from "./allLesson/Lesson16";
import Lesson17 from "./allLesson/Lesson17";
import Lesson18 from "./allLesson/Lesson18";
import Lesson19 from "./allLesson/Lesson19";
import Lesson20 from "./allLesson/Lesson20";
import Lesson21 from "./allLesson/Lesson21";
import Lesson22 from "./allLesson/Lesson22";
import Lesson23 from "./allLesson/Lesson23";
import Lesson24 from "./allLesson/Lesson24";
import Lesson25 from "./allLesson/Lesson25";
import Lesson26 from "./allLesson/Lesson26";
import Lesson27 from "./allLesson/Lesson27";
import Lesson28 from "./allLesson/Lesson28";
import Lesson29 from "./allLesson/Lesson29";
import Lesson30 from "./allLesson/Lesson30";
import Lesson31 from "./allLesson/Lesson31";
import Lesson32 from "./allLesson/Lesson32";
import Lesson33 from "./allLesson/Lesson33";
import Lesson34 from "./allLesson/Lesson34";
import Lesson35 from "./allLesson/Lesson35";
import Lesson36 from "./allLesson/Lesson36";
import Lesson37 from "./allLesson/Lesson37";
import Lesson38 from "./allLesson/Lesson38";
import Lesson39 from "./allLesson/Lesson39";
import Lesson40 from "./allLesson/Lesson40";
import Lesson41 from "./allLesson/Lesson41";
import Lesson42 from "./allLesson/Lesson42";

export const Lesson = () => {
    const [selectedLesson, setSelectedLesson] = useState(1);

    const count = 5

    return(
        <div className="lesson-main">
            <ul className="lesson-list">
                <li onClick={() => setSelectedLesson(1)} className="lesson-list__item">1. Вступний урок.</li>
                <li onClick={() => setSelectedLesson(2)} className="lesson-list__item">2. Проект, основа html.</li>
                <li onClick={() => setSelectedLesson(3)} className="lesson-list__item">3. Git, Github.</li>
                <li onClick={() => setSelectedLesson(4)} className="lesson-list__item">4. Семантика, посилання, якорі.</li>
                <li onClick={() => setSelectedLesson(5)} className="lesson-list__item">5. Форми.</li>
                <li onClick={() => setSelectedLesson(6)} className="lesson-list__item">6. Figma.</li>
                <li onClick={() => setSelectedLesson(7)} className="lesson-list__item">7. CSS вступ.</li>
                <li onClick={() => setSelectedLesson(8)} className="lesson-list__item">8. CSS селектори.</li>
                <li onClick={() => setSelectedLesson(9)} className="lesson-list__item">9. Flexbox.</li>
                <li onClick={() => setSelectedLesson(10)} className="lesson-list__item">10. Grid.</li>
                <li onClick={() => setSelectedLesson(11)} className="lesson-list__item">11. Стилізація Форм.</li>
                <li onClick={() => setSelectedLesson(12)} className="lesson-list__item">12. Препоцесори.</li>
                <li onClick={() => setSelectedLesson(13)} className="lesson-list__item">13. Адаптивність 1.</li>
                <li onClick={() => setSelectedLesson(14)} className="lesson-list__item">14. Адаптивність 2.</li>
                <li onClick={() => setSelectedLesson(15)} className="lesson-list__item">15. Команда верстка.</li>
                <li onClick={() => setSelectedLesson(16)} className="lesson-list__item">16. Проект 1.</li>
                <li onClick={() => setSelectedLesson(18)} className="lesson-list__item">18. Оператори та операнди.</li>
                <li onClick={() => setSelectedLesson(19)} className="lesson-list__item">19. Умови.</li>
                <li onClick={() => setSelectedLesson(20)} className="lesson-list__item">20. Цикли.</li>
                <li onClick={() => setSelectedLesson(21)} className="lesson-list__item">21. Функції.</li>
                <li onClick={() => setSelectedLesson(22)} className="lesson-list__item">22. Обєкти.</li>
                <li onClick={() => setSelectedLesson(23)} className="lesson-list__item">23. Масиви 1.</li>
                <li onClick={() => setSelectedLesson(24)} className="lesson-list__item">24. Масив 2.</li>
                <li onClick={() => setSelectedLesson(25)} className="lesson-list__item">25. DOM.</li>
                <li onClick={() => setSelectedLesson(26)} className="lesson-list__item">26. Події.</li>
                <li onClick={() => setSelectedLesson(27)} className="lesson-list__item">27. Слайдер.</li>
                <li onClick={() => setSelectedLesson(28)} className="lesson-list__item">28. AJAX.</li>
                <li onClick={() => setSelectedLesson(29)} className="lesson-list__item">29. Вебсховище.</li>
                <li onClick={() => setSelectedLesson(30)} className="lesson-list__item">30. Основи ООП в JavaScript 1.</li>
                <li onClick={() => setSelectedLesson(31)} className="lesson-list__item">31. Основи ООП в JavaScript 2.</li>
                <li onClick={() => setSelectedLesson(32)} className="lesson-list__item">32. Ретроспектива.</li>
                <li onClick={() => setSelectedLesson(33)} className="lesson-list__item">33. Проект 2.</li>
                <li onClick={() => setSelectedLesson(34)} className="lesson-list__item">34. Вступ до React.</li>
                <li onClick={() => setSelectedLesson(35)} className="lesson-list__item">35. React state/props.</li>
                <li onClick={() => setSelectedLesson(36)} className="lesson-list__item">36. Рендеринг списків і умов.</li>
                <li onClick={() => setSelectedLesson(37)} className="lesson-list__item">37. Axios/useEffect.</li>
                <li onClick={() => setSelectedLesson(38)} className="lesson-list__item">38. React routing.</li>
                <li onClick={() => setSelectedLesson(39)} className="lesson-list__item">39. Formik/yup.</li>
                <li onClick={() => setSelectedLesson(40)} className="lesson-list__item">40. React context.</li>
                <li onClick={() => setSelectedLesson(41)} className="lesson-list__item">41. Проект 3.</li>
                <li onClick={() => setSelectedLesson(42)} className="lesson-list__item">42. Випускний.</li>
            </ul>
            <div className="lesson-content">
                {selectedLesson === 1 && <Lesson1/>}
                {selectedLesson === 2 && <Lesson2/>}
                {selectedLesson === 3 && <Lesson3/>}
                {selectedLesson === 4 && <Lesson4/>}
                {selectedLesson === 5 && <Lesson5/>}
                {selectedLesson === 6 && <Lesson6/>}
                {selectedLesson === 7 && <Lesson7/>}
                {selectedLesson === 8 && <Lesson8/>}
                {selectedLesson === 9 && <Lesson9/>}
                {selectedLesson === 10 && <Lesson10/>}
                {selectedLesson === 11 && <Lesson11/>}
                {selectedLesson === 12 && <Lesson12/>}
                {selectedLesson === 13 && <Lesson13/>}
                {selectedLesson === 14 && <Lesson14/>}
                {selectedLesson === 15 && <Lesson15/>}
                {selectedLesson === 16 && <Lesson16/>}
                {selectedLesson === 17 && <Lesson17/>}
                {selectedLesson === 18 && <Lesson18/>}
                {selectedLesson === 19 && <Lesson19/>}
                {selectedLesson === 20 && <Lesson20/>}
                {selectedLesson === 21 && <Lesson21/>}
                {selectedLesson === 22 && <Lesson22/>}
                {selectedLesson === 23 && <Lesson23/>}
                {selectedLesson === 24 && <Lesson24/>}
                {selectedLesson === 25 && <Lesson25/>}
                {selectedLesson === 26 && <Lesson26/>}
                {selectedLesson === 27 && <Lesson27/>}
                {selectedLesson === 28 && <Lesson28/>}
                {selectedLesson === 29 && <Lesson29/>}
                {selectedLesson === 30 && <Lesson30/>}
                {selectedLesson === 31 && <Lesson31/>}
                {selectedLesson === 32 && <Lesson32/>}
                {selectedLesson === 33 && <Lesson33/>}
                {selectedLesson === 34 && <Lesson34/>}
                {selectedLesson === 35 && <Lesson35/>}
                {selectedLesson === 36 && <Lesson36/>}
                {selectedLesson === 37 && <Lesson37/>}
                {selectedLesson === 38 && <Lesson38/>}
                {selectedLesson === 39 && <Lesson39/>}
                {selectedLesson === 40 && <Lesson40/>}
                {selectedLesson === 41 && <Lesson41/>}
                {selectedLesson === 42 && <Lesson42/>}
            </div>
        </div>    
    )
}

export default Lesson;
