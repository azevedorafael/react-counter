import {
    ADD_COUNTER,
    REMOVE_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from './actions'
export const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return state.concat(0)

        case REMOVE_COUNTER:
            return state.filter((_, index) => index !== action.index)

        case INCREMENT_COUNTER:
            return state.map((counter, index) => (
                index === action.index ? counter + 1 : counter
            ))

        case DECREMENT_COUNTER:
            return state.map((counter, index) => (
                index === action.index ? counter - 1 : counter
            ))
    }
    return state
}