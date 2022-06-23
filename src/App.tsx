import React, {  FC, useRef } from 'react';
import Button from './components/Button';
import Input, { InputRef } from './components/Input';
import { ChangeEvent } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import  CssBaseline  from '@mui/material/CssBaseline';
import { Box } from '@mui/material';




const App: FC = () =>{

  const InputRef = useRef<InputRef>(null);
  
  const clickSave = () =>{
    InputRef.current?.setValue('1111')
  }
  const clichCancel = () =>{
    console.log(InputRef.current?.getValue());
    
  }

  const changeInput = (value: string , e: ChangeEvent<HTMLInputElement> | undefined) =>{
    console.log({e: e?.target.value});
    
  }
  return (
    <div>
     <Button variant='success' onClick={  clickSave} >save </Button>
     <Button variant='primary' onClick={clichCancel} >Cancel</Button>
     <Button >exit</Button>

      <div>
        <Input onChange={changeInput}  ref={InputRef}/>
      </div>
      {/* thư viện material */}
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box sx={{p:3}}>
              <Button variant='outline'>ádsa</Button>
          </Box>
      </ThemeProvider>
    </div>
  )
}

export default App;
