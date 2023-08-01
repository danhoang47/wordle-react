import { useCallback, useState } from "react";

function useToggle(initialState: boolean = false) {
	const [on, setOn] = useState(initialState);

	const handleToggle = useCallback((value: boolean) => {
		setOn(value);
	}, []);

	return [on, handleToggle];
}

export default useToggle;
