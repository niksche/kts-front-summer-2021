import "./Input.css";

type InpurProps = {
    value: string,
    placeholder: string
}

const Input: React.FC<InpurProps> = ({ value, placeholder, children }) => {
    return <div className="input">
        <input
            className="input-field"
            placeholder={placeholder}>
            {children}
        </input>
    </div>
};


export default Input;
