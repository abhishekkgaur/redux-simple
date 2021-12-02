const setUser = (userObj) => {
    console.log('userAction setUser called...');
    console.log('userObject is : ' + userObj.vale);
    return {
        type: "SET_USER",
        payload: userObj
    }
}

const logOut = () => {
    console.log('userAction LOG_OUT called...');
    return {
        type: "LOG_OUT"
    }
}

export default {
    setUser,
    logOut
}