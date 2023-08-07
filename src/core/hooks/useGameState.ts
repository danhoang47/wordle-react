import { useReducer, useState } from "react";

export type GameState = {
	boardState: string[];
	currentRowIndex: number;
};

export type GameStatePayload = {
	key?: string;
	action: "submit" | "delete" | "add";
};

type InternalGameStatePayload = {
	action: "set";
	boardState: string[];
};

const gameStateReducer = (
	{ boardState, currentRowIndex }: GameState,
	payload: GameStatePayload | InternalGameStatePayload
): GameState => {
	if (payload.action === "add") {
		console.log(payload.key);
		return {
			boardState: boardState.map((row, index) =>
				currentRowIndex === index ? row + payload.key : row
			),
			currentRowIndex,
		};
	} else if (payload.action === "delete") {
		console.log("delete");
		return {
			boardState: boardState.map((row, index) =>
				currentRowIndex === index ? row.slice(0, row.length - 1) : row
			),
			currentRowIndex,
		};
	} else if (payload.action === "set") {
		const numberOfRowNotEmpty =
			payload.boardState.reduce(
				(prev, curr) => (curr ? prev + 1 : prev),
				0
			) - 1;

		return {
			boardState: payload.boardState,
			currentRowIndex: numberOfRowNotEmpty < 0 ? 0 : numberOfRowNotEmpty,
		};
	} else {
		console.log("Submit: ", boardState);

		return {
			boardState,
			currentRowIndex: currentRowIndex + 1,
		};
	}
};

function useGameState(initialState: GameState) {
	const [gameState, dispatch] = useReducer(gameStateReducer, initialState);
	const [isFetching, setFetching] = useState(false);
	const [isValid, setValid] = useState(true);
	const FIXED_WORD_LENGHT = 5;

	console.log(gameState.boardState);

	// TODO: load latest gameState from LocalStorage

	const onAdd = (key: string) => {
		if (
			gameState.boardState[gameState.currentRowIndex].length <
			FIXED_WORD_LENGHT
		) {
			dispatch({ action: "add", key });
		}
	};

	const onDelete = () => {
		if (gameState.boardState[gameState.currentRowIndex].length != 0) {
			dispatch({ action: "delete" });
		}
	};

	const onSubmit = () => {
		console.log(gameState.boardState)
		if (
			isFetching ||
			gameState.boardState[gameState.currentRowIndex].length <
				FIXED_WORD_LENGHT
		)
			return;
		setFetching(true);

		fetch(
			`https://api.dictionaryapi.dev/api/v2/entries/en/${
				gameState.boardState[gameState.currentRowIndex]
			}`
		)
			.then((res) => res.json())
			.then((data) => {
				setFetching(false);

				if (data.message) {
					// TODO: show Toast
					setValid(false);
				} else {
					dispatch({ action: "submit" });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onSubmitInvalidKeyword = () => {
		setValid(true);
	};

	return {
		gameState,
		isValid,
		onAdd,
		onDelete,
		onSubmit,
		onSubmitInvalidKeyword,
	};
}

export default useGameState;

/**
 * submit =>
 * 1. isValid = false => shake => setValid
 * 2. isValid = true => flip => show result & increase row index
 */
