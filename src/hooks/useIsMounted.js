import { useCallback, useEffect, useRef } from "react";

/* GitHub Repository - Exercise */
export const useIsMounted = () => {
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = false;
    }, [])

    return useCallback(() => isMounted.current, []);
};
