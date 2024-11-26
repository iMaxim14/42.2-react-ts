import Button from "../Button/Button";
import "./styles.css";
//Импортируем useState
import { useState } from "react";

function Feedback() {
  //вызываем хук useState и передаем в него первоначальное состояние
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  //прописываем функции для изменений при клике на лайк и дизлайк
  const onLikeClick = ():void => {
    setLikes((prevValue) => prevValue + 1);
  };

  const onDislikeClick = ():void => {
    setDislikes((prevValue) => prevValue + 1);
  };

  // прописываем функцию для обнуления лайков и дизлайков
  const onResetClick = ():void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <div className="like-quantity result-wrapper">{likes}</div>
      <div className="like-button-wrapper feedback-button-wrapper">
        <Button
          buttonName="Like"
          buttonClass="like-button feedback-button"
          onClick={onLikeClick}
        />
      </div>
      <div className="dislike-button-wrapper feedback-button-wrapper">
        <Button
          buttonName="Dislike"
          buttonClass="dislike-button feedback-button"
          onClick={onDislikeClick}
        />
      </div>
      <div className="dislike-quantity result-wrapper">{dislikes}</div>
      <div className="reset-button-wrapper feedback-button-wrapper">
        <Button
          buttonName="Reset"
          buttonClass="reset-button feedback-button"
          onClick={onResetClick}
        />
      </div>
    </div>
  );
}

export default Feedback;
