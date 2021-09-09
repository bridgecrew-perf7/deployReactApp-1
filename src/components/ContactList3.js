import { connect } from "react-redux";
import Contact3 from "./Contact3";

function ContactList3(props){
    const data_list = props.contacts.map((data, id)=><Contact3 name={data.name} id={id}/>);

    return(
        <div className="contact-container">
            <ul className="contact-list">
                {data_list}
            </ul>
        </div>
    );
}

function mapStateToProps(state){
    return{
        contacts: state.contactReducer.contacts
    }
}

export default connect(mapStateToProps)(ContactList3);