import { useState, useCallback, useEffect, useRef } from "react";
import { GameSetting, ValueChangeHandler } from "@/core/types";

const gameSettingsLocalStorageKey = "wordle-game-settings";

function useGameSetting(
	initialState: GameSetting
): [GameSetting, ValueChangeHandler<GameSetting>] {
	const [gameSettings, setGameSettings] = useState<GameSetting>(initialState);
	const isInitial = useRef(true);

	// Loading game's settings from LocalStorage
	useEffect(() => {
		const savedGameSettingsState = localStorage.getItem(
			gameSettingsLocalStorageKey
		);
		
		if (savedGameSettingsState) {
			setGameSettings(JSON.parse(savedGameSettingsState));
		}

		isInitial.current = false;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// remove/add class for document based on mode
	useEffect(() => {
		if (gameSettings.darkTheme) {
			document.documentElement.classList.add("theme-dark");
		} else {
			document.documentElement.classList.remove("theme-dark");
		}
	}, [gameSettings.darkTheme]);

	// sync with Local Storage
	useEffect(() => {
		if (!isInitial.current) {
			localStorage.setItem(
				gameSettingsLocalStorageKey,
				JSON.stringify(gameSettings)
			);
		}
	}, [gameSettings]);

	const onThemeChange = useCallback((value: boolean) => {
		setGameSettings((prev) => ({ ...prev, darkTheme: value }));
	}, []);

	const onHardModeChange = useCallback((value: boolean) => {
		setGameSettings((prev) => ({ ...prev, hardMode: value }));
	}, []);

	const onHighConstractModeChange = useCallback((value: boolean) => {
		setGameSettings((prev) => ({ ...prev, highContrastMode: value }));
	}, []);

	const handleGameSettingsChange = useCallback(
		<K extends keyof GameSetting>(key: K, value: GameSetting[K]) => {
			switch (key) {
				case "darkTheme":
					onThemeChange(value);
					return;
				case "hardMode":
					onHardModeChange(value);
					return;
				case "highContrastMode":
					onHighConstractModeChange(value);
					return;
				default:
					throw new Error("Key is not existed in GameSettingType");
			}
		},
		[]
	);

	return [gameSettings, handleGameSettingsChange];
}

export default useGameSetting;
