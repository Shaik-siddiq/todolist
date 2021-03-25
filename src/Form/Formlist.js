import React, { Component } from 'react'
import Formlistitem from './Formlistitem'

 class Formlist extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              items:[],
              currentitem:{
                  key:'',
                  text:''
              }  
         }
     }
        additem = (event) =>{
            event.preventDefault()
            const newitem = this.state.currentitem
            if(newitem !== ''){
                const items = [...this.state.items, newitem] 
                this.setState({
                    items:items,
                    currentitem:{
                        key:'',
                        text:''
                    }
                })
            }
        }
        Deleteitem = (key) =>{
            const deleteitems = this.state.items.filter(item => item.key !== key)
                this.setState({items:deleteitems})
        }

        Changehandle = (event) =>{
            this.setState({currentitem:{text:event.target.value,key:Date.now()}})
        }
        Setupdate =(text,key)=>{

            console.log("items:"+this.state.items);
            const items = this.state.items;
            items.map(item=>{ 
          if(item.key===key){
                console.log(item.key +"    "+key)
                item.text= text;
              }
            })
            this.setState({
              items: items
            })
        }
        
         

    render(){
        return (
            <div>
                <h1>Add & input field </h1>
                <form onSubmit={this.additem}>
                    <input type='text' vlaue={this.state.currentitem.text} placeholder='additem' onChange={this.Changehandle} />
                    <button>add</button>
                </form>
                <p>{this.state.items.text}</p>
                <Formlistitem items={this.state.items} delete={this.Deleteitem} setupdate={this.Setupdate} />
            </div>
        )
    }
}

export default Formlist
