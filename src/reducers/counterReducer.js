const counterReducer = (state = 1, action) => {
    console.log('counter reducer main called...');
    console.log('state is ' + state);
    console.log('action type is ' + action.type);

    switch (action.type) {
        case "INCREMENT":
            console.log('reducer case INCREMENT called...');
            return state + 1
        case "DECREMENT":
            console.log('reducer case DECREMENT called');
            return state - 1
        default:
            return state
    }
}

export default counterReducer