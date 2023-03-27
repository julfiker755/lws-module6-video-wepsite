import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getvideos } from './Videosapi'
const  initialState={
    videos:[],
    isLoading:false,
    isError:false,
    error:""
}

export const fetchvideos=createAsyncThunk('videos/fetchvideos',async({tags,search})=>{
    const data=await getvideos(tags,search)
    return data
})

const Videosslice=createSlice({
    name:'videos',
    initialState,
    extraReducers:(builder)=>{
      builder
      .addCase(fetchvideos.pending,(state)=>{
        state.isLoading=true;
        state.isError=false;
      })
      .addCase(fetchvideos.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.videos=action.payload
      })
      .addCase(fetchvideos.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.videos=[];
        state.error=action.error?.message

      })
    }

})
export default Videosslice.reducer