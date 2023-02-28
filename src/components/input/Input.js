import React from 'react'
import "./style.css"
function Input(props) {
 function   setFunction(e){
    const val = e.target.value; 
    const name = e.target.name;   
    let data = {...props.data}
    console.log(e.target.value )
    if(name ==='isActive'){
        data[e.target.name] = e.target.checked 
    }
    else{
            data[name] =  val
    }
     
        props.setData(data)
    }
    console.log(props.data[props.name])
    return (
        <div className={props.divClass} key={props.id}>
            <label htmlFor={props.id}  >
                {
                    (props.name ? <span> {props.name} : </span> : "")
                }

                <input
                    name={props.name}
                    type={props.type}
                    className={props.class}
                    value={props.data[props.name]} 
                    onChange = {(e)=>setFunction(e)}
                    />
            </label>
        </div>
    )
}

export default Input