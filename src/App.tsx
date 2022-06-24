import React, {  FC, useRef } from 'react';

import Input, { InputRef } from './components/Input';
import { ChangeEvent } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import  CssBaseline  from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Button  from '@mui/material/Button';
import Table from './components/Table';
import Form from './components/Table/ForwardRefRenderFunction';
import Counter from './features/counter/Counter';




// const App: FC = () =>{

//   const InputRef = useRef<InputRef>(null);
  
//   const clickSave = () =>{
//     InputRef.current?.setValue('1111')
//   }
//   const clichCancel = () =>{
//     console.log(InputRef.current?.getValue());
    
//   }

//   const changeInput = (value: string , e: ChangeEvent<HTMLInputElement> | undefined) =>{
//     console.log({e: e?.target.value});
    
//   }
//   return (
//     <div>
//      {/* <Button variant='success' onClick={  clickSave} >save </Button>
//      <Button variant='primary' onClick={clichCancel} >Cancel</Button>
//      <Button >exit</Button> */}

//       <div>
//         <Input onChange={changeInput}  ref={InputRef}/>
//       </div>
//       {/* thư viện material */}
//       <ThemeProvider theme={theme}>
//           <CssBaseline/>
//           <Box sx={{p:3}}>
//               <Button variant='contained' color='success'>save</Button>
//               <Button variant='contained' color='error'>save</Button>
//           </Box>
//       </ThemeProvider>
//       {/* table binh thuong */}
//       <div>
//         <Table header={[
//           {key:'STT' , name:'stt'},
//           {key:'hovaten' , name:'Họ và tên'},
//           {key:'ngaysinh' , name:'Ngay sinh'},
//           {key:'diachi' , name:'Địa chỉ'},
//           {key:'phone' , name:'số điện thoại'},
         
//         ]} 
//         data={[
//           {
//             STT:'1',
//             hovaten:'nguyễn Văn A',
//             ngaysinh:'2000',
//             diachi:'ds,fjsfds',
//             phone:'95486854'
//           },
//           {
//             STT:'2',
//             hovaten:'nguyễn Văn A',
//             ngaysinh:'2000',
//             diachi:'ds,fjsfds',
//             phone:'95486854'
//           },
//           {
//             STT:'3',
//             hovaten:'nguyễn Văn A',
//             ngaysinh:'2000',
//             diachi:'ds,fjsfds',
//             phone:'95486854'
//           }

//         ]}
//         />
//       </div>

//       {/* table formref */}
//       <div>
//         <Form />
//       </div>
//     </div>
//   )
// }

// cấu hình redux toolkit 
const App: FC = () =>{
  return(
    <div>
      <Counter />
    </div>
  )
}

export default App;
