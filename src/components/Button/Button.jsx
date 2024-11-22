import "./styles.css";

function Button ({buttonName='Get', buttonType, onClick}){
    // console.log(props.buttonName);
    
    return <button onClick={onClick} className='main-button' type={buttonType}>{buttonName}</button>;
}

export default Button;
