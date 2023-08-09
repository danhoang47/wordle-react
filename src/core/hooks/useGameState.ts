import { useReducer, useState, useLayoutEffect, useRef } from "react";

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

export type ResetGameStatePayload = {
	action: "reset";
	gameState: GameState;
};

type InternalGameStatePayload = {
	action: "set";
	boardState: string[];
};

const gameStateReducer = (
	{ boardState, currentRowIndex, isComplete }: GameState,
	payload: GameStatePayload | InternalGameStatePayload | ResetGameStatePayload
): GameState => {
	if (isComplete && payload.action !== 'reset') return { boardState, currentRowIndex, isComplete };

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
	} else if (payload.action === "reset") {
		console.log("Reset: ", payload.gameState);
		return payload.gameState;
	} else {
		const nextState: GameState = {
			boardState,
			isComplete:
				boardState[currentRowIndex] === payload.key ||
				currentRowIndex === boardState.length,
			currentRowIndex: currentRowIndex + 1,
		};

		return nextState;
	}
};

const getKeyword = () => words[Math.round(Math.random() * words.length)];

function useGameState(initialState: GameState) {
	const initialStateRef = useRef<GameState>(initialState);
	const [gameState, dispatch] = useReducer(
		gameStateReducer,
		initialStateRef.current
	);
	const [isFetching, setFetching] = useState(false);
	const [isValid, setValid] = useState(true);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [keyword, setKeyword] = useState(getKeyword());
	const [messages, setMessages] = useState<string[]>([]);

	console.log(keyword);
	console.log(gameState);

	const onToastShowEnd = () => {
		setMessages((prev) => prev.slice(0, prev.length - 1));
	};
	const FIXED_WORD_LENGHT = 5;

	// TODO: load latest gameState from LocalStorage

	// Show toast message when completed
	useLayoutEffect(() => {
		if (gameState.isComplete) {
			setMessages((prev) => [...prev, "Few !!!"]);
		}
	}, [gameState.isComplete]);

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
				if (data.message) {
					setValid(false);
					setMessages((prev) => [...prev, "Invalid keyword !!!"]);
				} else {
					dispatch({ action: "submit", key: keyword });
				}
				setFetching(false);
			});
	};

	const onRestartGame = () => {
		setKeyword(getKeyword);
		dispatch({ action: "reset", gameState: initialStateRef.current });
	};

	const onSubmitInvalidKeyword = () => {
		setValid(true);
	};

	return {
		gameState,
		keyword,
		messages,
		isValid,
		onAdd,
		onDelete,
		onSubmit,
		onSubmitInvalidKeyword,
		onToastShowEnd,
		onRestartGame,
	};
}

export default useGameState;

/**
 * submit =>
 * 1. isValid = false => shake => setValid
 * 2. isValid = true => flip => show result & increase row index
 */
