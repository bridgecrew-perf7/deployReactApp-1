export default function removeContact(id){
    return{
        type: 'REMOVE_CONTACT',
        payload: {
            id: id
        }
    }
}