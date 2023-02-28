import { useState,useEffect } from 'react';
import './App.css';
import Form from './components/form/Form';
import Usertable from './components/usertable/Usertable'
function App() {
  const [ref,setRef] = useState([]);
  const [list,setList] = useState([]);
  // useEffect(() => {
    
  //   return () => {
  //     setList([list])
  //   };
  // }, [ref]);

  console.log(list)
  return (
    <div className="App">
        <Form list ={list} setList={setList} setRef = {setRef}/>
        <Usertable  list ={list} setList={setList} />
    </div>
  );
}

export default App;
