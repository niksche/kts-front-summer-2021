import { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
    onClick: () => void,
    children: ReactNode,
    // disabled: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <button className="search-button" onClick={onClick}>
        {children}
    </button>
}

export default Button;