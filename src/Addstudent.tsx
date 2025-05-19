import {useState} from "react";


const Addstudent = ({onAdd}) =>{
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            onAdd(name);
            setName('');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Imię"/>
            <button type="submit">Dodaj</button>
        </form>
    )
}
export default Addstudent;