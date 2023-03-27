import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tags:[],
    search:"",
}

const filterslice =createSlice({
    name:"filter",
    initialState,
    reducers:{
        tagselected:(state,action)=>{
            state.tags.push(action.payload)
        },
        removetag:(state,action)=>{
          const removeindex=state.tags.indexOf(action.payload)
          if(removeindex !== -1){
            state.tags.splice(removeindex,1)
          }
        },
        searchmenu:(state,action)=>{
            state.search=action.payload
        }
    }
})

export const {tagselected,removetag,searchmenu}=filterslice.actions
export default filterslice.reducer;
