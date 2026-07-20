import { useEffect, useState } from "react"

const FunctionComponent = () => {
    const [text, setText] = useState(localStorage.getItem("text") || "");

    useEffect(() => {
        localStorage.setItem("text", text);
    }, [text])

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <p>Text: {text}</p>

            <input type="text" value={text} onChange={handleChangeText} />
        </div>
    );
};

export default FunctionComponent;
