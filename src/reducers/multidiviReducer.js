const multidiviReducer = (state = 5, action) => {
    switch (action.type) {
        case "MULTIPLICATION":
            console.log('reducer case MULTIPLICATION called...');
            return state * 5
        case "DIVIDE":
            console.log('reducer case DIVIDE called...');
            return state / 5;
        default:
            return state
    }
}
export default multidiviReducer;