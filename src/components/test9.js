import { useState, useEffect } from "react";

function AddPersonForm(props){
    const [person, setPerson] = useState("");

    function hanldeChange(e){
        setPerson(e.target.value);
    }
     
    function handleClick(){
        if(person.trim()!==""){
            props.handleAddPerson(person.trim());
        }
    }
    return(
        <div>
            <input onChange={hanldeChange} type="text" value={person} placeholder="Enter name here..."/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

function ContactList(props){
    const data_list = props.list.map((data, id)=><li key={id}>{data}</li>);
    return (
        <ul>
            {data_list}
        </ul>
    )
}
const contacts = ["James Smith", "Thomas Anderson", "Wayne"];
export default function ContactManager(){
    const [list, setList] = useState(contacts);
    useEffect(()=>console.log(list));

    function addPerson(person){
        setList([...list, person]);
    }

    return(
        <div>
            <AddPersonForm handleAddPerson={addPerson}/>
            <ContactList list={list}/>
        </div>
    );
}