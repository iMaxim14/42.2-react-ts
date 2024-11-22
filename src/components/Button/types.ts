export interface ButtonProps {
    buttonName?: string;
    buttonType?: "button" | "submit" | "reset"; //данное решение загуглил, т.к. при назначении типа string выдавало ошибку
    onClick?: () => void;
    buttonClass?: string
  }