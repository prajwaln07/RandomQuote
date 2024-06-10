import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
     add:(state,action)=>{
      if(state.indexOf(action.payload) === -1)
        state.push(action.payload);
     },
     remove:(state,action)=>{
        return state.filter((item)=> item !== action.payload)
     },
    }

})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;
