import React, { useEffect, useState } from "react";
import "../styles/christmas.css";

const Christmas = () => {
    const wishes = [
        "🎄 Merry Christmas and a Happy New Year 🎅",
        "✨ May your days be filled with joy and peace! ❄️",
        "🎁 Wishing you love, laughter, and light this Christmas! 💖",
        "🌟 May the spirit of Christmas fill your heart with warmth! 🕊️",
        "🎅 Let the magic of Christmas bring happiness to your home! 🎄",
    ];

    const [currentWish, setCurrentWish] = useState(0);

    // ❄️ Snowflakes Effect — always active
    useEffect(() => {
        const snow = document.createElement("div");
        snow.className = "snowflakes";

        for (let i = 0; i < 50; i++) {
            const flake = document.createElement("div");
            flake.className = "snowflake";
            flake.innerHTML = "❄";
            flake.style.left = `${Math.random() * 100}vw`;
            flake.style.animationDuration = `${Math.random() * 5 + 5}s`;
            flake.style.fontSize = `${Math.random() * 15 + 10}px`;
            snow.appendChild(flake);
        }

        document.body.appendChild(snow);
        return () => document.body.removeChild(snow);
    }, []); // ✅ No dependency warnings

    // 🎁 Cycle through wishes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWish((prev) => (prev + 1) % wishes.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [wishes.length]); // ✅ Warning fixed

    return (
        <div className="christmas-container">
            <h1 className="title">🎅 Merry Christmas 🎄</h1>
            <p className="subtitle">Spreading Love, Joy & Happiness Everywhere 💖</p>

            <div className="wish-box">
                <p className="wish-text fade">{wishes[currentWish]}</p>
            </div>

            <footer className="footer">
                <p>Made with ❤️ by Seeniselvam</p>
            </footer>
        </div>
    );
};

export default Christmas;
