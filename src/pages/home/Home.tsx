import { GameState } from "@/core/hooks/useGameState";
import { useGameState } from "@/core/hooks";
import { GameBoard, RestartGameItem, VirtualKeyboard } from "@/features";
import { Toast } from "@/core/components";

import styles from "./Home.module.scss";

const gameStateInitialValue: GameState = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	boardState: Array.from(new Array(6)).map((_) => ""),
	currentRowIndex: 0,
	isComplete: false,
};

function Home() {
	const {
		gameState,
		keyword,
		messages,
		isValid,
		onAdd,
		onDelete,
		onSubmit,
		onSubmitInvalidKeyword,
		onRestartGame,
		onToastShowEnd,
	} = useGameState(gameStateInitialValue);

	return (
		<div id={styles["home"]}>
			<GameBoard
				boardState={gameState.boardState}
				currentRowIndex={gameState.currentRowIndex}
				keyword={keyword}
				isValid={isValid}
				onSubmitInvalidKeyword={onSubmitInvalidKeyword}
			/>
			<VirtualKeyboard
				keyword={keyword}
				currentRowIndex={gameState.currentRowIndex}
				boardState={gameState.boardState}
				onAdd={onAdd}
				onDelete={onDelete}
				onSubmit={onSubmit}
			/>
			{
				gameState.isComplete && <RestartGameItem onRestartButtonClick={onRestartGame}/>
			}
			<div className={styles["toastContainer"]}>
				{messages.reverse().map((message, index) => (
					<Toast
						key={message + index}
						onToastShowEnd={onToastShowEnd}
					>
						{message}
					</Toast>
				))}
			</div>
		</div>
	);
}

export default Home;
