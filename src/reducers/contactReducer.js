import { connect } from "react-redux";

const initial_state = {
    contacts: [
        {
            name: 'Le Dau A',
        },
        {
            name: 'Ba Thanh V',
        },
        {
            name: 'Ngo Tan Em',
        }
    ]
};

export default function contactReducer(state = initial_state, action){
    switch(action.type){
        case 'ADD_CONTACT':
            return{
                contacts: [...state.contacts, action.payload]
            }
        case 'REMOVE_CONTACT':
            const arr = state.contacts;
            arr.forEach((data, index)=>{
                if(index === action.payload.id){
                    arr.splice(index, 1);
                }
            })
            return{
                contacts: [...arr],
            }
        default: 
            return state;
    }
}