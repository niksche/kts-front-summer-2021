import React, { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
    onClick: (e: React.MouseEvent) => void,
    children: React.ReactNode,
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
    return <button className="search-button" onClick={onClick}>
        {children}
    </button>
}

export default Button;