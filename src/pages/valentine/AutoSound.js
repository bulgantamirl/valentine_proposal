import React, { useEffect } from "react";

const AutoPlaySound = ({source}) => {
    useEffect(() => {
        const audio = new Audio( source || "https://www.myinstants.com/media/sounds/happy-happy-happy-cat.mp3");
        audio.volume = 0.6;
        audio.play().catch((error) => console.log("Autoplay blocked:", error));
    }, []);

    return null;
};

export default AutoPlaySound;