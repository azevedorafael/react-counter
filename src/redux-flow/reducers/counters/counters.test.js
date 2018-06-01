import counters, {
    initialState,
    ADD_COUNTER,
    REMOVE_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from './index'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

it('counters should be a function', () => {
    expect(counters).to.be.a('function')
})

it('Should add a new counter', () => {
    const before = deepFreeze([])
    const action = deepFreeze({ type: ADD_COUNTER })
    const after = [0]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should add a new counter again', () => {
    const before = deepFreeze([0, 1])
    const action = deepFreeze({ type: ADD_COUNTER })
    const after = [0, 1, 0]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should remove a counter', () => {
    const before = deepFreeze([0, 1, 2])
    const action = deepFreeze({ type: REMOVE_COUNTER, index: 1 })
    const after = [0, 2]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should increment a counter', () => {
    const before = deepFreeze([5, 0, 2])
    const action = deepFreeze({ type: INCREMENT_COUNTER, index: 1 })
    const after = [5, 1, 2]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should increment another counter', () => {
    const before = deepFreeze([1, 9, 2])
    const action = deepFreeze({ type: INCREMENT_COUNTER, index: 0 })
    const after = [2, 9, 2]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should decrement a counter', () => {
    const before = deepFreeze([5, 0])
    const action = deepFreeze({ type: DECREMENT_COUNTER, index: 1 })
    const after = [5, -1]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should decrement another counter', () => {
    const before = deepFreeze([1, 2, 3, 4, 5])
    const action = deepFreeze({ type: DECREMENT_COUNTER, index: 2 })
    const after = [1, 2, 2, 4, 5]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should return current state in case of unknown', () => {
    const before = deepFreeze([1, 2, 3])
    const action = deepFreeze({ type: 'UNKNOWN', index: 3 })
    const after = [1, 2, 3]
    expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should return initial state if last state is undefined', () => {
    const before = undefined
    const action = deepFreeze({})
    const after = initialState
    expect(counters(before, action)).to.be.deep.equal(after)
})