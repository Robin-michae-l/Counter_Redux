import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:"cApp",
    initialState:{
        value:0
    },
    //actions are created inside this reducers key as object.
    reducers:{
        //logics to update state

        //fn to increment number
        increment:(state,action)=>{
            //if is a argument fn then it can only be accessed by action and valuein payload.
            state.value+=action.payload
        },

        //fn to decrement number
        decrement:(state,action)=>{
            state.value-=action.payload
        },

        //fn to reset
        reset:(state)=>{
            state.value=0

        }

        

    }
})

//action is required by component inorder to update state.
export const{increment,decrement,reset}=counterSlice.actions

//reducer is required to store to change the state value

export default counterSlice.reducer