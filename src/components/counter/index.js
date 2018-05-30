import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ counter, decrement, increment }) => (
    <div>
        <h1>{counter}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
)

export default(Counter)