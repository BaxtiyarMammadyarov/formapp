import React from 'react'
 import { useState } from 'react';

import ButtonCom from '../button/buttonCom'
import Input from '../input/Input'
import "./style.css"
export default function Form() {
    const [data, setData] = useState({});
    const [list,setList] = useState([]);

    const listinput =[{
        name : "Name",
        type : "text",
        id : "nameid",
        class: "name",
        value :data.name,
        divClass :'inputCom',
        data :data,
        setData : setData

    },
    {
        name : "Email",
        type : "email",
        id : "emailid",
        class: "email",
        value :data.email,
        divClass :'inputCom',
        data :data,
        setData : setData
    },
    {
        name : "Password",
        type : "password",
        id : "passwordid",
        class: "password",
        value :data.password,
        divClass :'inputCom',
        data :data,
        setData : setData
    },
    {
        name : "isActive",
        type : "checkbox",
        id : "checkboxid",
        class: "checkbox",
        value :"",
        divClass :'inputCom',
        data :data,
        setData : setData
    }
   ]


  return (
    <div className='form'>
    <h3>Registration Form</h3>
    {
        listinput.map((itm)=> <Input itm = {itm} />)
    }
      <ButtonCom data = {data} setData = {setData} list = {list} setList= {setList} />
   

    </div>
  )
}
