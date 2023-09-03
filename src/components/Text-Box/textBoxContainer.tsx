import "./textBox.css";
import { TextBox } from "./textBox";

interface TextBoxProps {
    textBox: TextBox;
}

export const TextBoxContainer: React.FC<TextBoxProps> = (textbox) => {
    return (

        <div className="text-box-container">
            <div className="align-x-text">
                <div className="align-y-text">
                    <div className="text-box-title">
                        {textbox.textBox.title}
                    </div>
                    <div className="text-box-copy">
                        <div id="text-copy">
                            {textbox.textBox.copy}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}