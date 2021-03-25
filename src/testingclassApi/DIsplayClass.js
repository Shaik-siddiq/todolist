import React, { Component } from 'react'

 class DIsplayClass extends Component {
   
    render() {
        return (
            <div clsassName="container">
            <div className="row">
                <div className="col">
                
                    <div className="table table-hover table-stripped">
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.display.length>0?this.props.display.map((item)=>{return(
                                    <React.Fragment>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                        </tr>
                                    </React.Fragment>
                                )}):null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                
            </div>
        )
    }
}

export default DIsplayClass
