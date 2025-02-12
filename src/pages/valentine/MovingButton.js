import React, { useState } from "react";

const MovingButton = () => {
    const [position, setPosition] = useState({ top: "50%", left: "50%" });

    const getRandomPosition = () => {
        const randomTop = Math.random() * 80 + 10; // Between 10% and 90% of viewport height
        const randomLeft = Math.random() * 80 + 10; // Between 10% and 90% of viewport width
        setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    };

    return (
            <button
                onMouseEnter={getRandomPosition} // Move when hovered
                style={{
                    position: "absolute",
                    top: position.top,
                    left: position.left,
                    transition: "top 0.3s ease, left 0.3s ease",
                }}
                className="w-[120px] bg-red-500 text-white h-[50px] shadow-lg"
            >
                NO 😈
            </button>
    );
};

export default MovingButton;
