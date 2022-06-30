import {createSlice} from '@reduxjs/toolkit'
const homepageSlice = createSlice({
    name:'homepage',
    initialState:{
        slider:[],
        movie:[],
        tvshow:[],
        movielegacy:[],
        community:[],
        loading:""
    },
    reducers:{
       getHomepageData:(state,actions) =>{
        state.loading = actions.payload.loading
       }, 
       getHomepageDataSuccess:(state,actions) =>{
        state.loading = actions.payload.loading
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