import { createSlice } from "@reduxjs/toolkit";

const initialState={
    filteredData:{},
    filters:{
        location:"",
        price:0
    }
}

export const filterSlice=createSlice({

    name:"filters",
    initialState,
    reducers:{
        setFilteredData:(state,action)=>{
            state.filteredData=action.payload
        },
        setFilters:(state,action)=>{
            state.filters={...state.filters,...action.payload};
        }
    }
})

export const {setFilteredData,setFilters}=filterSlice.actions;
export default filterSlice.reducer;
