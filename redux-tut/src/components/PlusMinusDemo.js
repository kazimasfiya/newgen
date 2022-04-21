import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { decrement, increment } from '../actions/Index'


class PlusMinusDemo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log(props)
    }
    render() {
        return (
            <div>
                <h3>Increement/Decrement By Using Class Component</h3>

                <Container>
                    <Button onClick={()=>{this.props.increment(1)}}>+</Button>
                    {this.props.count}
                    <Button onClick={()=>{this.props.decrement(1)}}>-</Button>
                </Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
return {count:state.changeCount}
}

const mapDispatchToProps=(dispatch)=>{
   return{
       increment:(num)=>dispatch(increment(num)),
       decrement:(num)=>dispatch(decrement(num))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlusMinusDemo)
