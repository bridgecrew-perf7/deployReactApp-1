export default function Test2(props){
    return (
        <div>
            <h3>Hello, {props.name}</h3>
            <p>{props.isNew === true ? 'Welcome to us' : 'Welcome back!'}</p>
        </div>
    );
}