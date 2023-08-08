import { GameBoard, VirtualKeyboard } from "@/features";
import { useGameState } from "@/core/hooks";
import { GameState } from "@/core/hooks/useGameState";

import styles from "./Home.module.scss";
import { Toast } from "@/core/components";

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
