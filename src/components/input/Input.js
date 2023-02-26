import React from 'react'
import "./style.css"
function Input(props) {
 function   setFunction(e){
    // console.log(e.target.name,e.target.value)
    let data = {...props.itm.data}
    console.log(e.target.value )
    if(e.target.name ==='isActive'){
        data[e.target.name] = e.target.checked 
    }
    else{
        
        data[e.target.name] = e.target.value   
    }
     
        props.itm.setData(data)
    }
    return (
        <div className={props.itm.divClass} key={props.itm.id}>
            <label htmlFor={props.itm.id}  >
                {
                    (props.itm.name ? <span> {props.itm.name} : </span> : "")
                }

                <input
                    name={props.itm.name}
                    type={props.itm.type}
                    className={props.itm.class}
                    value={props.itm.value}  
                    onChange = {(e)=>setFunction(e)}
                    />
            </label>
        </div>
    )
}

export default Input