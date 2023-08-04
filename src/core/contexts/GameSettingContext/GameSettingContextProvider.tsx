import { ReactNode, useMemo } from "react";

import { GameSettingContext } from ".";
import { useGameSetting } from "@/core/hooks";
import { GameSettingContextType } from "./GameSettingContext";
import { GameSetting } from "@/core/types";

const gameSettingsInitialState: GameSetting = {
	darkTheme:
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? true
			: false,
	hardMode: false,
	highContrastMode: false,
};

function GameSettingContextProvider({ children }: { children?: ReactNode }) {
	const [gameSettings, handleGameSettingsChange] = useGameSetting(
		gameSettingsInitialState
	);

	const gameSettingContextValue: GameSettingContextType = useMemo(
		() => ({
			...gameSettings,
			handleGameSettingsChange,
		}),
		[gameSettings, handleGameSettingsChange]
	);

	return (
		<GameSettingContext.Provider value={gameSettingContextValue}>
			{children}
		</GameSettingContext.Provider>
	);
}

export default GameSettingContextProvider;
