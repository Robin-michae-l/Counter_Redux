import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/counterSlice';



function Counter() {

  //stae to hold the input value
  const [Range,setRange]=useState()
  //hook to dispatch a fn in action
  const dispatch=useDispatch()
  //component can access state using useselector hook
  const count=useSelector((state)=>state. counter.value)

  console.log(Range);
  
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
        <div className='bg-light p-5 rounded' style={{height:'350px'}}>
            <h1 className='text-primary'>Counter Application</h1>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <h2 style={{fontSize:'40px'}}>{count}</h2>
            </div>
            <div className='mt-3'>
            <Stack direction="row" spacing={2}>
            <Button onClick={()=>dispatch(increment(Number(Range)))} variant="contained" className='bg-success'>Increment</Button>
            <Button onClick={()=>dispatch(decrement(Number(Range)))} variant="contained" className='bg-warning'>Decrement</Button>
            <Button onClick={()=>dispatch(reset())} variant="contained" className='bg-danger'>Reset</Button>
          
           </Stack>

            </div>
            <div className='w-100 mt-4'> 
              <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' placeholder='Enter the range' style={{borderColor:'red'}} />
            </div>


            

        </div>
        
    </div>
  )
}

export default Counter