import '../style/test10.css'
import { useState } from "react";

function AddContactForm(props){
    const [data, setData] = useState("");

    function handleInput(e){
        setData(e.target.value);
    }

    function handleClick(){
        const data_trim = data.trim();
        if(data_trim!=="")
            props.handleAdd(data_trim);
    }

    return(
        <div>
            <input type="text" value={data} onChange={handleInput} placeholder="Enter name here..."/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

function Contact(props){
    function handleClick(){
        props.handleRemove(props.id);
    }
    return (
        <li className="contact-item">
            <p>{props.id + 1}. {props.data}</p>
            <button onClick={handleClick}>X</button>
        </li>
    );
}

function ContactList(props){
    const list = props.list.map((data, id) => <Contact data={data} id={id} handleRemove={props.handleRemove}/>);
    return(
        <div className="contact-container">
            <ul className="contact-list">
                {list}
            </ul>
        </div>
    );
}

const demoList = ['Van A', 'Thi B', 'Nhu C'];
export default function ContactManager2(){
    const [list, setList] = useState(demoList);

    function addContact(data){
        setList([...list, data]);
    }

    function removeContact(id){
        if(id < 0 || id >= list.length)
            return;
        list.splice(id, 1);
        setList([...list]); 
    }

    return(
        <div>
            <AddContactForm handleAdd={addContact}/>
            <ContactList list={list} handleRemove={removeContact}/>
        </div>
    );
}