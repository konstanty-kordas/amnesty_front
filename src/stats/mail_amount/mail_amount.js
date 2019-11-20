import React from 'react';
import './mail_amount.css';
import CountUp from 'react-countup';

const MailAmount = () => {
    const total_mail_amount = 254; // tu trzeba do bazy dodac
    return (
        <div className="amount">
            <div className="info">
                <h1>
                    <CountUp end={total_mail_amount} duration={4}/>
                </h1>
                <h2>Napisanych listów</h2>
            </div>
        </div>
    );
}

export default MailAmount;