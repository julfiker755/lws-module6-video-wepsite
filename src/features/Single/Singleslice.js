import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getsingle } from "./Singleapi"

const initialState={
    single:{},
    isLoading:false,
    isError:false,
    error:""
}

export const fetchsingle=createAsyncThunk('single/fetchsingle',async(vid)=>{
  const data=await getsingle(vid)
  return data
})

const Singleslice=createSlice({
    name:'single',
    initialState,
    extraReducers:(builder)=>{
      builder
      .addCase(fetchsingle.pending,(state)=>{
        state.isLoading=true;
        state.isError=false;
      })
      .addCase(fetchsingle.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.single=action.payload
      })
      .addCase(fetchsingle.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.single={};
        state.error=action.error?.message

      })
    }

})
export default Singleslice.reducer