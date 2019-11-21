import React, { Component } from 'react';
import MailAmount from './mail_amount/mail_amount';
import PplRanking from './ppl_ranking/ppl_ranking';
import ClassRanking from './class_ranking/class_ranking';
import './stats.css';

class Stats extends Component {
    constructor() {
        super();
        this.stats = React.createRef();
        this.state = {
            update: false,
        };
    }
    componentDidMount() {
        let ypos = 0;
        setInterval(() => {
            if (ypos === 300) {
                ypos = 0;
                this.stats.current.style.transition = `all 0s ease`
                this.stats.current.style.transform = `translateY(-${ypos}vh)`
                setTimeout(() => {
                    this.setState({
                        update: true
                    })
                    ypos = 100;
                    this.stats.current.style.transition = `all 1s ease`
                    this.stats.current.style.transform = `translateY(-${ypos}vh)`
                }, 100)
            } else {
                this.setState({
                    update: false
                })
                ypos += 100;
                this.stats.current.style.transition = `all 1s ease`
                this.stats.current.style.transform = `translateY(-${ypos}vh)`
            }
        }, 5000);
    }
    render() {
        return (
            <div className="stats-wrap">
                <div className="stats" ref={this.stats}>
                    <PplRanking />
                    <MailAmount update={this.state.update} total={254} />
                    <ClassRanking />
                    <PplRanking />
                </div>
            </div>
        );
    }
}

export default Stats;
