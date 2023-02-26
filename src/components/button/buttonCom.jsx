import React from 'react'
import "./style.css"
function ButtonCom(props) {
    function onClickFunction(e) {
        console.log(e.target.name)
        if (e.target.name === 'save') {
            let list = [...props.list]
            list.push({ ...props.data })
            props.setList([...list])
        } else {
            let data = {}
            props.setData(data)

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