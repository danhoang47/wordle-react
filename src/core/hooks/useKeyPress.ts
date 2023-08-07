import { useEffect } from 'react';

function useKeyPress(key: string, handler: (args?: unknown) => void) {
    
    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.key === key) {
                console.log(key);
                handler();
            }
        })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useKeyPress;