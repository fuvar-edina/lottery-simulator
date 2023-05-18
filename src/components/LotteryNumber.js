function LotteryNumber({ num }) {
    return (
        <div key={num} className="lottery-number">
            <p>{num}</p>
        </div>
    );
}

export default LotteryNumber;
