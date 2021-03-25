import axios from 'axios'
import React, { Component } from 'react'
import DIsplayClass from './DIsplayClass'

 class AxiosClassApi extends Component {
     constructor(props){
         super(props)
         this.state={
            data:"",
            error:""
         }
     }
     componentDidMount(){
         axios.get("https://jsonplaceholder.typicode.com/posts")
         .then((res)=>{this.setState({data:res.data})})
         .catch((err)=>{this.setState({error:err})})
     }

    render() {
        return (
            <div>
             <DIsplayClass display={this.state.data} />
            </div>
        )
    }
}

export default AxiosClassApi
