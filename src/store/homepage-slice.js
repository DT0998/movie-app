import {createSlice} from '@reduxjs/toolkit'
const homepageSlice = createSlice({
    name:'homepage',
    initialState:{
        slider:[],
        movie:[],
        tvshow:[],
        movielegacy:[],
        community:[],
        isLoading:false
    },
    reducers:{
       getHomepageData:(state,actions) =>{
        state.isLoading = actions.payload.isLoading
       }, 
       getHomepageDataSuccess:(state,actions) =>{
        state.isLoading = actions.payload.isLoading
        state.slider = actions.payload.slider
        state.movie = actions.payload.movie
        state.tvshow = actions.payload.tvshow
        state.movielegacy = actions.payload.movielegacy
        state.community = actions.payload.community
       }
    }
})

export const homepageAction = homepageSlice.actions;
export default homepageSlice;