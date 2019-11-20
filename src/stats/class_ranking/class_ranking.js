import React from "react";
import './class_ranking.css';
import SchoolClass from './school_class';

const ClassRanking = () => {
    const createSchoolClass = () => {
        let color=101010
        const SchoolClassTable = []
        //ten const bedzie pobrany z bazy danych
        const nameTab = ['2E', '4C', '1G', '3E', '2A']
        // to tez z bazy
        const amountTab = [10,7,6,3,2]
        let totalAmount = 0;
        for(let i=0; i<5; i++) {
            totalAmount = totalAmount + amountTab[i];
        }
        for (let i=0; i<5;i++){           
            SchoolClassTable.push(<SchoolClass key={i} amount={amountTab[i]} name={nameTab[i]} color={`#${color}`} totalAmount={totalAmount}/>)
            if(color>303030){
                color=202020
            }
            else{
                color+=252525
            }
        }
        return (SchoolClassTable)
    }
    return (
        <div className="classranking">
            <h1> Najlepsze klasy</h1>
            {createSchoolClass()}
        </div>
    )
}

export default ClassRanking;