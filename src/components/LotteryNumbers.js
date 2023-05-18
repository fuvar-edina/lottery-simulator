import React, { useState, useEffect } from "react";
import LotteryNumber from "./LotteryNumber";

function LotteryNumbers() {
    const numbers = generateNumbersArray(90);
    const [winningNumbers, setWinningNumbers] = useState([]);

    function generateNumbersArray(total) {
        let lotteryNumbers = [];
        for (let i = 1; i <= total; i++) {
            lotteryNumbers.push(i);
        }
        return lotteryNumbers;
    }

    function generateRandomNumber(totalNumbers, totalNumbersArray) {
        const randomNumber = Math.floor(Math.random() * totalNumbers + 1);
        return totalNumbersArray[randomNumber - 1];
    }

    function generateWinningNumbers() {
        const totalNumbers = [1, 2, 3, 4, 5];
        let drawnNumbers = [];

        totalNumbers?.forEach((num) => {
            const numbersToDrawFrom = numbers?.filter((num) => !drawnNumbers?.includes(num));
            const newRandNum = generateRandomNumber(numbersToDrawFrom.length, numbersToDrawFrom);
            drawnNumbers.push(newRandNum);
            setWinningNumbers(drawnNumbers);
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            generateWinningNumbers();
        }, 2000);

        return () => clearInterval(interval);
    }, [winningNumbers]);

    return (
        <div className="lottery-numbers">
            <div className="lottery-numbers__winning-numbers">
                <p className="lottery-numbers__text">Winning numbers:</p>
                <div className="lottery-numbers__numbers-list">
                    {winningNumbers.map((i) => (
                        <LotteryNumber key={i} num={i} />
                    ))}
                </div>
            </div>

            <div className="lottery-numbers__your-numbers">
                <p className="lottery-numbers__text">Your numbers:</p>
                <div className="lottery-numbers__numbers-list">
                    <LotteryNumber num={1} />
                    <LotteryNumber num={2} />
                    <LotteryNumber num={3} />
                    <LotteryNumber num={4} />
                    <LotteryNumber num={5} />
                </div>
            </div>
        </div>
    );
}

export default LotteryNumbers;
