export const incrementCount = (amount) => {
    return {
        type: "INCREMENT_COUNT",
        payload: amount
    }
}