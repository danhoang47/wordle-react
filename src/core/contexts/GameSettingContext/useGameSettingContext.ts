import { useContext } from 'react';

import GameSettingContext from './GameSettingContext'; 

function useGameSettingContext() {
    const gameSettingContextValue = useContext(GameSettingContext);
    
    return gameSettingContextValue;
}

export default useGameSettingContext;