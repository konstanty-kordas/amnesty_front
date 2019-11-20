import React from 'react';
import './ppl_ranking.css';

const PersonBar = (props) => {
    // const total_mail_count = 138; //pobrane z bazy danych
    const barHeight = props.amount/(props.totalAmount/2)*700+10;
    let styleP = {
        top: '-2vh',
        transform: 'translate(0, 50%)'
    }
    const styleB = {
        width: '8vw',
        height: `${barHeight}px`,
        backgroundColor: props.color
    }
    if (barHeight < 50) {
        styleP = {
            transform: 'translate(0, 0) !important',
            top: '-7vh',
            color: '#000'
        }
    }
    return (
        <div className="person">
            <div className="bar" style={styleB}><p style={styleP}>{props.amount}</p></div>
            <p>{props.name}</p>
        </div>
    );
    
}

export default PersonBar;