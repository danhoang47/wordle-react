import { CSSProperties, memo } from "react";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import { useKeyPress } from "@/core/hooks";
import { Button, Icon } from "@/core/components";
import { Evaluation } from "@/core/types";
import { clsx } from "@/utils";

import styles from "./Keyboard.module.scss";

type LetterButtonProps = {
	letter: string;
	ariaLabel?: string;
	role?: string;
	evaluation?: Evaluation;
	style?: CSSProperties;
	onAdd: (key: string) => void;
	onDelete: () => void;
	onSubmit: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
function LetterButton({
	letter,
	role = "button",
	evaluation,
	onAdd,
	onDelete,
	onSubmit,
}: LetterButtonProps) {
	const onKeyPress = () => {
		if (letter === "Enter") {
			onSubmit();
		} else if (letter === "Backspace") {
			onDelete();
		} else {
			onAdd(letter);
		}
	};

	useKeyPress(letter, onKeyPress);
	return (
		<Button
			className={clsx(
				styles["letterButton"],
				letter.length > 1 && styles["oneAndAHalf"],
				evaluation && styles[evaluation!]
			)}
			ariaLabel={
				evaluation ? `${letter} ${evaluation}` : `${letter} button`
			}
			role={role}
			onClick={onKeyPress}
		>
			{letter !== "Backspace" ? letter : <Icon icon={faDeleteLeft} />}
		</Button>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(LetterButton);

// Submit => check state => increase index
// when index change => run callback
