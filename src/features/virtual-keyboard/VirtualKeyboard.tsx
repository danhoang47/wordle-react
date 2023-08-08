import { useMemo } from "react";

import Row from "./Row";
import LetterButton from "./LetterButton";

import keys from "./keys";
import styles from "./Keyboard.module.scss";
import { getEvaluation, stringToArray } from "@/utils";
import { Evaluation } from "@/core/types";

type VirtualKeyboardProps = {
	boardState: string[];
	keyword: string;
	currentRowIndex: number;
	onAdd: (key: string) => void;
	onDelete: () => void;
	onSubmit: () => void;
};

function VirtualKeyboard({
	boardState,
	keyword,
	currentRowIndex,
	onAdd,
	onDelete,
	onSubmit,
}: VirtualKeyboardProps) {
	const addedLetters = useMemo(() => {
		const map = new Map<string, Evaluation>();
		boardState.forEach((letters) => {
			if (letters) {
				stringToArray(letters, letters.length).forEach(
					(letter, letterIndex) => {
						map.set(
							letter,
							getEvaluation(keyword, letter, letterIndex)!
						);
					}
				);
			}
		});
		return map;

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRowIndex]);

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
							letter={letter}
							evaluation={addedLetters.get(letter)}
						/>
					))}
				</Row>
			))}
		</div>
	);
}

export default VirtualKeyboard;
