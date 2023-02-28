import React from 'react'
 import { useState,useEffect } from 'react';
import Input  from "../input/Input"
import ButtonCom from '../button/buttonCom'

import "./style.css"
export default function Form(props) {

    const [data, setData] = useState({Name:"",Email:"",Password:"",isActive:""});
  
    

  return (
    <div className='form'>
    <h3>Registration Form</h3>
    {/* {
        listinput.map((itm)=> <Input itm = {itm} key = {itm.id} data = {data}/>)
    } */}
  
    <Input data = {data} setData = {setData} name = {"Name"}  type = {'text'}  divClass   = {'inputCom'}  id = {"nameid"} key = {'nameId'} value = {data.Name} />
    <Input data = {data} setData = {setData}  name = {"Email"}  type = {'email'}  divClass   = {'inputCom'}  id = {"emailid"} key = {'emailId'}  value = {data.Email} />
    <Input data = {data} setData = {setData}  name = {"Password"}  type = {'password'}  divClass   = {'inputCom'}  id = {"passwordid"} key = {'passwordId'} value = {data.Password} />
    <Input data = {data} setData = {setData}  name = {"isActive"}  type = {'checkbox'}  divClass   = {'inputCom'}  id = {"checkboxid"} key = {'checkboxid'} /> 
      <ButtonCom data = {data} setData = {setData} list = {props.list} setList= {props.setList} setRef = {props.setRef} />


    </div>
  )
}
