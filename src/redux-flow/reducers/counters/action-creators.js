import {
    ADD_COUNTER,
    REMOVE_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from './actions'

export const addCounter = () => ({ type: ADD_COUNTER })
export const removeCounter = (index) => ({ type: REMOVE_COUNTER, index })
export const incrementCounter = (index) => ({ type: INCREMENT_COUNTER, index })
export const decrementCounter = (index) => ({ type: DECREMENT_COUNTER, index })