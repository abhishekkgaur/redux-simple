const increment = () => {
    console.log('action INCREMENT called...');
    return {
        type: "INCREMENT"
    }
}

const decrement = () => {
    console.log('action DECREMENT called...');
    return {
        type: "DECREMENT"
    }
}

const multiplication = () => {
    console.log('action MULTIPLICATION called...');
    return {
        type: 'MULTIPLICATION'
    }
}

const divide = () => {
    console.log('action DIVIDE called...');
    return {
        type: "DIVIDE"
    }
}

export default {
    increment,
    decrement,
    divide,
    multiplication
}