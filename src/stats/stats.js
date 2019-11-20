import React, { Component } from 'react';
import MailAmount from './mail_amount/mail_amount';
import PplRanking from './ppl_ranking/ppl_ranking';
import ClassRanking from './class_ranking/class_ranking';
import './stats.css';

class Stats extends Component {
    // componentDidMount () {
    //     const sleep = (milliseconds) => {
    //         return new Promise(resolve => setTimeout(resolve, milliseconds))
    //     }          
    //     sleep(1000).then(() => {
    //         document.querySelector('.stats').style.transform = `translateY(100vh)`;
    //     })          
    // }
    render () {
        return (
            <div className="stats">
                <PplRanking/>
                <MailAmount/>
                <ClassRanking/>
            </div>
        );
    }
}

export default Stats;
