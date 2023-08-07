import Row from "./Row";
import LetterCell from "./LetterCell";

import { getEvaluation } from "@/utils";

import styles from "./Game.module.scss";

const stringToArray = (value: string, length: number = DEFAULT_WORD_LENGTH) => {
	if (value.length === length) {
		return value.split("");
	} else {
		const valueLength = value.length;
		return [...value.split(""), ...new Array<string>(length - valueLength)];
	}
};

const DEFAULT_WORD_LENGTH = 5;

type GameBoardProps = {
	boardState: string[];
	currentRowIndex: number;
	keyword: string;
	isValid: boolean;
	onSubmitInvalidKeyword: () => void;
};

function GameBoard({
	boardState,
	currentRowIndex,
	keyword,
	isValid,
	onSubmitInvalidKeyword,
}: GameBoardProps) {
	console.log(currentRowIndex);

	return (
		<div id={styles["game-board"]}>
			{boardState.map((letters, index) => {
				return (
					<Row
						ariaLabel={`Row ${index + 1}`}
						key={index}
						isValid={isValid && index === currentRowIndex}
						onSubmitInvalidKeyword={onSubmitInvalidKeyword}
					>
						{stringToArray(letters).map((letter, letterIndex) => (
							<LetterCell
								key={`${letter}-${letterIndex}-${index}`}
								letter={letter}
								evaluation={
									index === currentRowIndex
										? getEvaluation(
											letter,
											letterIndex,
											keyword
										)
										: undefined
								}
								isEvaluated={index < currentRowIndex}
							/>
						))}
					</Row>
				);
			})}
		</div>
	);
}

export default GameBoard;
