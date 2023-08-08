import { useReducer, useState } from "react";

import words from "./words";

export type GameState = {
	boardState: string[];
	currentRowIndex: number;
	isComplete: boolean;
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
	{ boardState, currentRowIndex, isComplete }: GameState,
	payload: GameStatePayload | InternalGameStatePayload
): GameState => {
	if (isComplete) return { boardState, currentRowIndex, isComplete };

	if (payload.action === "add") {
		return {
			boardState: boardState.map((row, index) =>
				currentRowIndex === index ? row + payload.key : row
			),
			currentRowIndex,
			isComplete,
		};
	} else if (payload.action === "delete") {
		console.log("delete");
		return {
			boardState: boardState.map((row, index) =>
				currentRowIndex === index ? row.slice(0, row.length - 1) : row
			),
			currentRowIndex,
			isComplete,
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
			isComplete,
		};
	} else {
		const nextState: GameState = {
			boardState,
			isComplete: boardState[currentRowIndex] === payload.key,
			currentRowIndex: currentRowIndex + 1,
		}

		return nextState;
	}
};

function useGameState(initialState: GameState) {
	const [gameState, dispatch] = useReducer(gameStateReducer, initialState);
	const [isFetching, setFetching] = useState(false);
	const [isValid, setValid] = useState(true);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [keyword, setKeyword] = useState(
		() => words[Math.round(Math.random() * words.length)]
	);
	const FIXED_WORD_LENGHT = 5;

	// TODO: load latest gameState from LocalStorage
	console.log(keyword);

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
					dispatch({ action: "submit", key: keyword });
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
		keyword,
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
