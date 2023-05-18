import DataBox from "./DataBox";
import Matches from "./Matches";
import LotteryNumbers from "./LotteryNumbers";

function Result() {
    return (
        <div className="result">
            <h2 className="result__title">Result</h2>
            <DataBox />
            <Matches />
            <LotteryNumbers />
        </div>
    );
}

export default Result;
