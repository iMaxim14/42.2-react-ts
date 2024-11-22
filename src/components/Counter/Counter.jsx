import Button from "../Button/Button";
import './styles.css'

//Шаг 1 - импорт хука useState из react
import { useState } from "react";

function Counter(){
    // Шаг 2 - вызываем хук useState и передаем в него первоначальное состояние (initialState)
    // делаем деструктуризацию массива из двух элементо, который возвращает хук useState
    const [count, setCount] = useState(0);

    // const result = useState(0);
    // console.log(result);
    // const count = result[0];
    // console.log(count);
    // const setCount = result[1];
    // console.log(setCount);

         //Шаг 3 - необходимо прописать функции, которые будут менять состояние. Внутри этих функций нужно использовать setCount
    const onPlusClick = () => {
    setCount((prevValue) => prevValue + 1);
    };
    
    const onMinusClick = () => {
        setCount((prevValue) => prevValue -1);
    }
    return(
        <div className='counter-container'>
            <div className='button-wrapper'>
                <Button buttonName='-' onClick={onMinusClick}/>
            </div>
            <div className='counter-result'>{count}</div>
            <div className='button-wrapper'>
                <Button buttonName='+' onClick={onPlusClick}/>
            </div>
        </div>
    )
}

export default Counter;