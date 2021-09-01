import "./Input.css";

type InpurProps = {
    value: string,
    placeholder: string,
    onChange: (e: InputEvent) => void
}

const Input: React.FC<InpurProps> = ({ value, placeholder, onChange }) => {
    return <div className="input">
        <input
            className="input-field"
            value={value}
            placeholder={placeholder}>
        </input>
    </div>
};


export default Input;
