import "./Button.css";

type ButtonProps = {
    onClick: () => void,
    children: string
}
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <div className="search-button">
        <img className="search-button_img" onClick={onClick} src={String(children)} alt="star" />
    </div>
}

export default Button;