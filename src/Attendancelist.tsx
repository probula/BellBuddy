import {useState} from "react";

const attendancelist = () => {
    const [list, setList] = useState<{name: string; ob: boolean}[]>([
        {name: "Jan", ob: false},
        {name: "Anna", ob: false},
    ]) //tablica stringow

    const addStudent = (name: string) => {
        setList(newList => [...newList, {name, ob: false}])
    }

    const status = (index: number) => {
        const updatedList = [...list];
        updatedList[index].ob =!updatedList[index].ob;
        setList(updatedList);
    }
    return (
        <div>
            <h2>Lista obecności: </h2>
                <ul>
                    {list.map((student, index) => (
                        <li key={index}>
                            {student.name} - {student.ob ? "Obecny" : "Nieobecny"}
                        <button onClick={() => status(index)}>Zmień status</button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default attendancelist