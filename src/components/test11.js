import { connect } from "react-redux";
import incrementCounter from "../actions/incrementCounter";

function Counter5(props){
    function handleClick(){
        props.incrementCounter(1);
    }

    return (
        <div>
            <p>Counter5 app: {props.count}</p>
            <button onClick={handleClick}>Incre</button>
        </div>
    );
}

function mapStateToProps(state){
    return{
        //vi combineReducers nen phai co them reducer chi dinh
        count: state.incrementReducer.count
    }
}

const mapDispatchToProps = {
    incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter5);