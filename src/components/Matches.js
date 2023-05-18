function Matches() {
    let matchNumber = 1000;

    return (
        <div className="matches">
            <div className="matches__box matches__box--first">
                <p className="matches__text">2 matches</p>
                <p className="matches__number">{matchNumber}</p>
            </div>
            <div className="matches__box matches__box--second">
                <p className="matches__text">3 matches</p>
                <p className="matches__number">{matchNumber}</p>
            </div>
            <div className="matches__box matches__box--third">
                <p className="matches__text">4 matches</p>
                <p className="matches__number">{matchNumber}</p>
            </div>
            <div className="matches__box matches__box--fourth">
                <p className="matches__text">5 matches</p>
                <p className="matches__number">{matchNumber}</p>
            </div>
        </div>
    );
}

export default Matches;
