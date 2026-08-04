import { useState, useEffect } from "react";

export function useDebounce(value, delayMs = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delayMs);

        return () => clearTimeout(timeoutId);

    }, [value, delayMs]);

    return debouncedValue;
}