import Result from "./components/Result";
import Plus from "./images/plus-icon.svg";

function LotterySimulator() {
    return (
        <div className="lottery-simulator">
            <header className="lottery-simulator__header">
                <img alt="plus" src={Plus} />
                <h1 className="lottery-simulator__title">Lottery Simulator</h1>
            </header>
            <div className="lottery-simulator__content">
                <Result />
            </div>
        </div>
    );
}

export default LotterySimulator;
