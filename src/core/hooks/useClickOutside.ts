import { MutableRefObject, useEffect } from "react";

function useClickOutside<T extends HTMLElement>(
	ref: MutableRefObject<T>,
	callback: () => void
) {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    }

	useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
}

export default useClickOutside;
