import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { incNumber, decNumber, resetNumber} from './actions/index';

function CounterCtrl() {

    const counter = useSelector(state => state.changeTheNumber)
    const dispatch = useDispatch();
    return (
        <div>
            <h1> Counter : {counter}</h1>
            <button onClick={() => dispatch(incNumber(7))}> + </button>
            <button onClick={() => dispatch(decNumber())}> - </button>
            
        </div>
    )
}

export default CounterCtrl
