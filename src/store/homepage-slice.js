import {createSlice} from '@reduxjs/toolkit'
const homepageSlice = createSlice({
    name:'homepage',
    initialState:{
        slider:[],
        movie:[],
        tvshow:[],
        movielegacy:[],
        community:[],
        loading:"true"
    },
    reducers:{
       getHomepageData:(state) =>{
        state.loading = true
       }, 
       getHomepageDataSuccess:(state,actions) =>{
        state.loading = false
        state.slider = actions.payload.slider
        state.movie = actions.payload.movie
        state.tvshow = actions.payload.tvshow
        state.movielegacy = actions.payload.movielegacy
       }
    }
})

export const homepageAction = homepageSlice.actions;
export default homepageSlice;