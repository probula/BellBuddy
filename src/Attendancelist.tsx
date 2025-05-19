import {useState} from "react";
import Addstudent from "./Addstudent.tsx";

const Attendancelist = () => {
    const [list, setList] = useState<{name: string; ob: boolean}[]>([
        {name: "Jan", ob: false},
        {name: "Anna", ob: false},
    ]) //tablica stringow

    const addStudent = (name: string) => {
        setList((newList) => [...newList, {name, ob: false}])
    }

    const status = (index: number) => {
        const updatedList = [...list];
        updatedList[index].ob =!updatedList[index].ob;
        setList(updatedList);
    }

    return (
        <div>
            <h2>Lista obecności: </h2>
            <Addstudent onAdd={addStudent}></Addstudent>
                <ul>
                    {list.map((student, index) => (
                        <li key={index}>
                            {student.name} - {student.ob ? "Obecny" : "Nieobecny"}
                        <button onClick={() => status(index)}>Zmień status</button>
                        </li>
                    ))}
                </ul>
            <h2>Ilość uczniów w klasie: {list.length}</h2>
            <h4>Obecni: {list.filter(x => x.ob).length}</h4>
            <h4>Nieobecni: {list.filter(x => !x.ob).length}</h4>

        </div>
    )
}

export default Attendancelist