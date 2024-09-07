import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData : [],
    imageURL : ""
}

export const cineSlice = createSlice({
    name : 'cine',
    initialState,
    reducers : {
        setBannerData : (state,action)=>{
            state.bannerData = action.payload
        },
        setImageURL : (state,action) =>{
            state.imageURL = action.payload
        }
    }
})

export const { setBannerData, setImageURL } = cineSlice.actions


export default cineSlice.reducer