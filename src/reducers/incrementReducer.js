const initialState = {
    count: 0
};

export default function incrementReducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            console.log(state.count);
            return {
                count: state.count + action.num,
            }
        default:
            return state;
    }
}