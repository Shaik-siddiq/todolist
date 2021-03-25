import React from 'react'

function Display(props) {
    return (
        <div>
            <pre>{JSON.stringify(props.display)}</pre>
            <table className="table table-hover table-stripped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {props.display >0? props.display.map((item)=>{
                            return(<React.Fragment>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            </React.Fragment>)
                    }) :null}
                </tbody>
            </table>
        </div>
    )
}

export default Display
