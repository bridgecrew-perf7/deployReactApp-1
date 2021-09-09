import addContact from '../actions/addContact';
import { connect } from 'react-redux';
import { useState } from 'react';

function AddContactForm(props){
    const [text, setText] = useState("");

    function handleClick(){
        const text_trim = text.trim();
        if(text_trim !== "")
            props.addContact({name: text_trim});
    }

    function handleChange(e){
        setText(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={handleChange} placeholder="Enter name here..." />
            <button onClick={handleClick}>Add</button>
        </div>
    );  
}

const mapDispatchToProps = {
    addContact
}

export default connect(null, mapDispatchToProps)(AddContactForm);