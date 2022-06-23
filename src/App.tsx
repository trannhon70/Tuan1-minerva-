import React, { ChangeEvent, FC, MouseEvent } from 'react';
import Button from './components/Button';
import Input from './components/Input';




const App: FC = () =>{
  const changeInput = (e: ChangeEvent<HTMLInputElement>) =>{
    console.log("change input", e.target.value);
    
  }
  return (
    <div>
     <Button variant='success' onClick={() =>  alert("save")} >save </Button>
     <Button variant='primary' onClick={() => console.log('cancel')} >Cancel</Button>
     <Button >exit</Button>

      <div>
        <Input onChange={changeInput} />
      </div>
     
    </div>
  )
}

export default App;
