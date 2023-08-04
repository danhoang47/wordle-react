import { createContext } from "react";

import { ContextType, GameSetting } from "@/core/types";

export type GameSettingContextType =
	ContextType<GameSetting, "handleGameSettingsChange">

const GameSettingContext = createContext<GameSettingContextType | undefined>(undefined);

export default GameSettingContext;
