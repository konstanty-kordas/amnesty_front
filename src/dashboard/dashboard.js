import React, { useState } from 'react';
import './dashboard.css';


const Dashboard = () => {
    const [students, setStudents] = useState([
        {
            name: "Adam",
            surname: "Korba",
            class: "3E",
            id: "345{67899",
            privilege: true,
        },
        {
            name: "Filip",
            surname: "Wachowiak",
            class: "3E",
            id: "456789876",
            privilege: true,
        },
        {
            name: "Mateusz",
            surname: "Chlebosz",
            class: "3C",
            id: "9876123",
            privilege: false,
        }
    ])
    const [studentsInCanteen, setStudentsInCanteen] = useState([])
    const moveToCanteen = (studentToMove) => {
        setStudents(students.filter((student) => student !== studentToMove))
        setStudentsInCanteen([studentToMove,...studentsInCanteen])
    }
    const moveToDefault = (studentToMove) => {
        setStudentsInCanteen(studentsInCanteen.filter((student) => student !== studentToMove))
        setStudents([studentToMove,...students])
    }
    return (
        <div className="dashboard">KOKPIT
            <ul>
                {students.map((student) =>
                    <li className={"studentRow"}>
                        <span>{student.id}</span>
                        <span>{student.name} {student.surname}</span>
                        <span>{student.class}</span>
                        <span>
                            <button onClick={() => moveToCanteen(student)}>Na stołowkę</button>
                        </span>
                    </li>)}
            </ul>
            <ul>
                {studentsInCanteen.map((student) =>
                    <li className={"studentRow"}>
                        <span>
                            <button onClick={() => moveToDefault(student)}>Do świetlicy</button>
                        </span>
                        <span>{student.id}</span>
                        <span>{student.name} {student.surname}</span>
                        <span>{student.class}</span>
                    </li>)}
            </ul>
        </div>
    )
}

export default Dashboard;