import "./LessonBtn.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { GroupContext } from "../../../Context/GroupContext";
import { HmContext } from "../../../Context/HmContext";

export const LessonBtn = ({ hmId, group_id }) => {
  const { user } = useContext(UserContext);
  const { group } = useContext(GroupContext);
  const { hm, setHm } = useContext(HmContext);
  const [homeworkText, setHomeworkText] = useState(""); // Стан для зберігання тексту домашнього завдання
  const [error, setError] = useState(""); // Стан для відображення помилок валідації

  const handleTextareaChange = (event) => {
    setHomeworkText(event.target.value);
    setError(""); // Скидання помилок при зміні тексту
  };

  const handleSubmit = () => {
    if (homeworkText.trim() === "") {
      setError("Поле не може бути порожнім");
    } else {
      // Ваша логіка для відправки домашнього завдання
      console.log("Відправлено домашнє завдання:", homeworkText);
      // Скидання значень після відправки
      setHomeworkText("");
      setError("");
    }
  };

  return (
    <div className="hm">
      <textarea
        value={homeworkText}
        onChange={handleTextareaChange}
        cols="30"
        rows="10"
      ></textarea>
      {error && <p className="error">{error}</p>}
      <div className="button" onClick={handleSubmit}>
        Send Homework
      </div>
    </div>
  );
};