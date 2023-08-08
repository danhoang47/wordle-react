import Row from "./Row";
import LetterCell from "./LetterCell";

import { getEvaluation, stringToArray } from "@/utils";

import styles from "./Game.module.scss";

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
	return (
		<div id={styles["game-board"]}>
			{boardState.map((letters, index) => {
				return (
					<Row
						ariaLabel={`Row ${index + 1}`}
						key={index}
						isValid={index === currentRowIndex ? isValid : true}
						onSubmitInvalidKeyword={onSubmitInvalidKeyword}
					>
						{stringToArray(letters).map((letter, letterIndex) => (
							<LetterCell
								key={`${letter}-${letterIndex}-${index}`}
								letter={letter}
								evaluation={getEvaluation(
									keyword,
									letter,
									letterIndex
								)}
								isEvaluated={index < currentRowIndex}
								animationDelay={letterIndex * 100}
							/>
						))}
					</Row>
				);
			})}
		</div>
	);
}

export default GameBoard;
