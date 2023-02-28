import React from 'react'
import { useEffect } from 'react';
import "./style.css"
function Usertable({ list }) {
    let i = 0
    //   console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyy",list)

    return (

        <table className="table2" id="table">
            <thead className='thead'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>isActive</th>
                </tr>
            </thead>
            <tbody className="tbody">
                {

                    list.map(val => {
                        return (
                            <tr key={i++} className={val.isActive?"true_c":"false_c"} >
                                <td>{val.Name}</td>
                                <td>{val.Email}</td>
                                <td>{val.Password}</td>
                                <td>{val.isActive?"👍":"👎"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    )
}

export default Usertable