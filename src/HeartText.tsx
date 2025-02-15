import { useEffect, useState } from 'react';
import "./HeartText.css";
import koshka from "./assets/koshka.png";

const HeartText = ({ text = "Имя", size = 15, scaleY = 1, speed = 100 }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [offset, setOffset] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prevOffset) => (prevOffset + 1) % text.length);
        }, speed);
        return () => clearInterval(interval);
    }, [text.length, speed]);

    const heartShape = [];

    for (let y = size; y > -size; y--) {
        const row = [];
        for (let x = -size * 2; x < size * 2; x++) {
            const equation = (x * 0.04) ** 2 + (y * 0.08 * scaleY) ** 2 - 1;
            if (Math.pow(equation, 3) - Math.pow(x * 0.04, 2) * Math.pow(y * 0.08 * scaleY, 3) <= 0) {
                const index = ((x - y + offset) % text.length + text.length) % text.length;
                row.push(text[index]);
            } else {
                row.push(" ");
            }
        }
        heartShape.push(row.join(""));
    }

    return (
        <div className="heart-wrapper">
            <h1 className="title">С ДНЁМ СВЯТОГО ВАЛЕНТИНА!</h1>
            <div className="image-container">
                <img src={koshka} alt="Кошка" className="circle-image" />
            </div>
            <div className="heart-container">
                {heartShape.map((line, index) => (
                    <div key={index} className="heart-line">
                        {line.split("").map((char, i) => (
                            <span key={i} className="heart-char">{char}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeartText;
