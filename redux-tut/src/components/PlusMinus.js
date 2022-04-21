import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../actions/Index'


function PlusMinus() {

    const dispatch = useDispatch();
    const count = useSelector((state)=>state.changeCount)

    console.log(count)

    return (
        <div>
            <h3>Increement/Decrement By Using Functional Component</h3>

            <Container>
                <Button onClick={()=>{dispatch(decrement(1))}}>-</Button>
                <span style={{padding:"10px"}}>{count}</span>
                <Button onClick={()=>{dispatch(increment(2))}}>+</Button>
            </Container>
        </div>
    )
}

export default PlusMinus