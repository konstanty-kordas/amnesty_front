import React from 'react';
import './class_ranking.css';

const SchoolClass = (props) => {
    const barWidth = (props.amount/(props.totalAmount))*200;
    const styleB = {
        width: `${barWidth}%`,
        height: `12.5vh`,
        backgroundColor: props.color
    }
    return (
        <div className="schoolclass">
            <p>{props.name}</p>
            <div className="bar" style={styleB}><p>{props.amount}</p></div>
        </div>
    );
    
}

export default SchoolClass;