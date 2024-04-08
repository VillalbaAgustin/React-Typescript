import React, { useEffect, useRef, useState } from 'react';

type TimerProps = {
    milisegundos: number;
};

export const Timer: React.FC<TimerProps> = ({ milisegundos }) => {
    const [segundos, setSegundos] = useState(0);
    const ref = useRef<number | null>(null);

    useEffect(() => {
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);

        return () => {
            ref.current && clearInterval(ref.current);
        };
    }, [milisegundos]);

    return (
        <div>
            <h4>Timer: <small>{segundos}</small></h4>
        </div>
    );
};

