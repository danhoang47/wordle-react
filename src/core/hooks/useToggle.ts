import { useCallback, useState, useDebugValue } from "react";

function useToggle(
	initialState: boolean = false
): [boolean, (value: boolean) => void] {
	const [on, setOn] = useState(initialState);


	const handleToggle = useCallback((value: boolean) => {
		setOn(value);
	}, []);

	useDebugValue(on ? 'on' : 'off');

	return [on, handleToggle];
}

export default useToggle;
