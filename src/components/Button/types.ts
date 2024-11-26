type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
    buttonName: string,
    buttonType?: ButtonType, //данное решение загуглил, т.к. при назначении типа string выдавало ошибку
    onClick?: () => void,
    buttonClass?: string
  }