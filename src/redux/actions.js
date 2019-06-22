//import firebase from './firebase';

export const updateCount = (amount) => {
    return {
        type: "UPDATE_COUNT",
        payload: amount
    }
}
