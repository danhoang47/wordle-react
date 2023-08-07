import Row from "./Row";

import styles from "./Keyboard.module.scss";

import keys from "./keys";
import LetterButton from "./LetterButton";

type VirtualKeyboardProps = {
	onAdd: (key: string) => void;
	onDelete: () => void;
	onSubmit: () => void;
};

function VirtualKeyboard({ onAdd, onDelete, onSubmit }: VirtualKeyboardProps) {
    const NUMBER_OF_KEY_PER_ROW = 9;

	return (
        <div id={styles["keyboard"]}>
            {keys.map((row, index) => (
                <Row key={index}>
                    {row.map((letter, index) => (
                        <LetterButton 
                            key={letter + index}
                            onAdd={onAdd}
                            onDelete={onDelete}
                            onSubmit={onSubmit}
                            ariaLabel={`${letter} button`}
                            isEvaluated={false}
                            letter={letter}
                        />
                    ))}
                </Row>
            ))}
        </div>
    );
}

export default VirtualKeyboard;
