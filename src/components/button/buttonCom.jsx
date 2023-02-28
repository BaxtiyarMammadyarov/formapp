import React from 'react'
import "./style.css"
function ButtonCom(props) {
    function onClickFunction(e) {
        e.preventDefault()
        console.log(e.target.name)
        if (e.target.name === 'save') {
            let list = [...props.list]
            list.push({ ...props.data })
            props.setList([...list])
            props.setData({Name:"",Email:"",Password:"",isActive:""})
            props.setRef(props.data)
        } else {
            props.data.name="";
            props.data.email = "";
            props.data.password = ""; 
       
            props.setData({Name:"",Email:"",Password:"",isActive:""})

        }
    }
    return (
        <div className='btnDiv' >

                <input
                    name='save'
                    type='button'
                    className='btn'
                    value='Save'
                    onClick={(e) => onClickFunction(e)}
                />
           

                <input
                    name='cancel'
                    type='button'
                    className='btn'
                    value='cancel'
                    onClick={(e) => onClickFunction(e)}
                />
           



        </div>
    )
}

export default ButtonCom