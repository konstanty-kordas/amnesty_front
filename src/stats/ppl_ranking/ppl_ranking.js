import React from 'react';
import PersonBar from './person_bar';
import './ppl_ranking.css';

const PplRanking = () => {
    //ten const bedzie pobrany z bazy danych
    const nameTab = ['Młodzież z Grassy Narrows', 'Ibrahim Ezz El-Din', 'José Adrián', 'Nasu Abdulaziz', 'Magai Matiop Ngong', 'Emil Ostrowko', 'Sarah Mardini i Seán Binder', 'Yiliyasijiang Reheman', 'Marinel Sumook Ubaldo', 'Yasaman Aryani'] //bedzie pobrane z bazy danych
    // to tez z bazy
    const amountTab = [50,31,85,12,31,4,6,39,1,0]
    const createPerson = () => {
        let totalAmount=0;
        for(let i=0; i<10; i++) {
            totalAmount = totalAmount + amountTab[i];
        }
        let color=101010
        const personTable = []
        for (let i=0; i<10;i++){           
            personTable.push(<PersonBar key={i} totalAmount={totalAmount} amount={amountTab[i]} name={nameTab[i]} color={`#${color}`}/>)
            if(color>303030){
                color=202020
            }
            else{
                color+=252525
            }
        }
        return (personTable)
    }
    return (
        <div className="ranking">
            <h1>Wysłane Listy</h1>
            {createPerson()}
        </div>
    );
}

export default PplRanking;
