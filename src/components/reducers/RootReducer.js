const initialState = {
    count: 0
}

function RootReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREAMENT':
            return { count: state.count + 1 }

        case 'DECREMENT':
            return { count: state.count - 1 }

        default:
            return state
    }
}

export default RootReducer;