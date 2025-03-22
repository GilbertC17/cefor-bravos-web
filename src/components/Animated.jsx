import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const Animated = ({ children, animation, delay = '0s' }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div
            ref={ref}
            className={`animate__animated ${inView ? animation : ''}`}
            style={{ animationDelay: delay }}
        >
            {children}
        </div>
    );
};

export default Animated;