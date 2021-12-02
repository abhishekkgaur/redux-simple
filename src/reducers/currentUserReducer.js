const currentUserReducer = (state = {}, action) => {
    console.log('current user reducer called...');
    console.log('state is : ' + state.value);
    console.log('action is : ' + action.value);
    console.log('payload is : ' + action.payload);

    switch (action.type) {
        case "SET_USER":
            console.log('reducer case SET_USER called...');
            console.log('action.type is : ' + action.type)
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT":
            console.log('reducer case LOG_OUT called...');
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
}

export default currentUserReducer;