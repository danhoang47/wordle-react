import { useCallback, useState } from "react";

function useToggle(
	initialState: boolean = false
): [boolean, (value: boolean) => void] {
	const [on, setOn] = useState(initialState);


	const handleToggle = useCallback((value: boolean) => {
		setOn(value);
	}, []);

	return [on, handleToggle];
}

export default useToggle;
