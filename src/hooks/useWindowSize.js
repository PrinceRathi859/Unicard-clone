import { useState, useEffect } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(0);

    const handleSize = () => {
        setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleSize);

    useEffect(() => handleSize(), []);

    return windowSize;
}

export default useWindowSize;