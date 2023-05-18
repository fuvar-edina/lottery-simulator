function DataBox() {
    let numberOfTickets = 1234567;
    let yearsSpent = 158;
    let costOfTickets = 370370100;

    return (
        <div className="data-box">
            <p className="data-box__number-of-tickets-text data-box__text">Number of tickets:</p>
            <p className="data-box__number-of-tickets data-box__number">{numberOfTickets}</p>
            <p className="data-box__years-spent-text data-box__text">Years spent:</p>
            <p className="data-box__years-spent data-box__number">{yearsSpent}</p>
            <p className="data-box__cost-of-tickets-text data-box__text">Cost of tickets:</p>
            <p className="data-box__number">
                <span>{costOfTickets}</span> Ft
            </p>
        </div>
    );
}

export default DataBox;
