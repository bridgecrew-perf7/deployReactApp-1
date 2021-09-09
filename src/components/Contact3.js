import { connect } from "react-redux";
import removeContact from "../actions/removeContact";

function Contact3(props){
    function handleClick(){
        props.removeContact(props.id);
    }
    return(
        <li class="contact-item">
            <p>{props.id + 1}. {props.name}</p>
            <button onClick={handleClick}>X</button>
        </li>
    );
}

const mapDispatchToProps = {    
    removeContact
}

export default connect(null, mapDispatchToProps)(Contact3);