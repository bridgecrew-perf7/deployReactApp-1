export default function addContact(data){
    return{
        type: 'ADD_CONTACT',
        payload: {
            name: data.name,
        }
    }
}