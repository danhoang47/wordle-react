import { useEffect } from "react";

function useKeyPress(key: string, handler: (args?: unknown) => void) {
	const handleKeyPress = (event: KeyboardEvent) => {
		event.stopPropagation();
		if (event.key === key || event.key === key) {
			handler();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);

		return () => document.removeEventListener("keydown", handleKeyPress);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handler]);
}

export default useKeyPress;
