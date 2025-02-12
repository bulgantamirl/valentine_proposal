import React from "react";
import heart from "../../assets/heart.svg"; // Import your heart SVG

const FloatingHearts = () => {
    const hearts = Array.from({ length: 10 }); // Generate 10 hearts

    return (
        <div className="w-full h-screen  overflow-hidden absolute">
            {hearts.map((_, index) => (
                <img
                    key={index}
                    src={heart}
                    alt="heart"
                    className="heart-animation absolute opacity-10"
                    style={{
                        top: `${Math.random() * 90}%`, // Random vertical position
                        left: `${Math.random() * 90}%`, // Random horizontal position
                        animationDelay: `${Math.random() * 2}s`, // Random delay for each heart
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingHearts;
