import React, { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
    onClick: (e: React.MouseEvent) => void,
    children: React.ReactNode,
    isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, children, isDisabled }) => {
    return <button className="search-button" onClick={onClick} disabled={isDisabled}>
        {children}
    </button>
}

export default Button;