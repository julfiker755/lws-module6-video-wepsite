import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { gettag } from "./Tagapi"

const initialState={
    tags:[],
    isLoading:false,
    isError:false,
    error:""
}

export const  fetachtags=createAsyncThunk('tag/fetchtags',async()=>{
   const data=await gettag()
   return data
})
const Tagslice=createSlice({
    name:'tag',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetachtags.pending,(state)=>{
          state.isLoading=true;
          state.isError=false;
        })
        .addCase(fetachtags.fulfilled,(state,action)=>{
          state.isLoading=false;
          state.isError=false;
          state.tags=action.payload
        })
        .addCase(fetachtags.rejected,(state,action)=>{
          state.isLoading=false;
          state.isError=true;
          state.tags=[];
          state.error=action.error?.message
  
        })
      }
})

export default Tagslice.reducer