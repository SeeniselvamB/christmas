import React, { useEffect, useState } from "react";
import "../styles/open.css";

const Open = ({ onComplete }) => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count === 0) {
            onComplete();
            return;
        }

        const timer = setTimeout(() => {
            setCount(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count, onComplete]);

    return (
        <div className="open-container">
            {/* key={count} forces remount → animation restarts */}
            <h1 key={count} className="count-number animate">{count}</h1>
        </div>
    );
};

export default Open;

