import React, { Component } from 'react'

class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             msg:'',
             item:[''],
        }
    }
    countIncrement = () => this.setState({count:this.state.count+1})
    countDecrement = () => this.setState({count:this.state.count - 1})
    messageChange = (event) => this.setState({msg:event.target.value})
        /*
        { this.setState(prevState => {
          if(prevState.count > 0) {
            return {
              count: prevState.count - 1
            }
          } else {
            return null;
          }
        });
      } */
    
    render() {
        return (
            <div>
                <button  onClick={this.countIncrement} >increment</button> 
                <button  onClick={this.countDecrement} >decrement</button>
                <h2>{this.state.count}</h2> 
                <button type='submit'>add item</button> 
                <button type='submit'>delete item</button> 
                <form>
                    <input type='text' onChange={this.messageChange} value={this.state.msg} />
                </form>
            </div>
        )
    }
}

export default Todolist
