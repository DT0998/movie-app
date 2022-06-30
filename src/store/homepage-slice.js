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
       getHomepageData: state =>{
        state.loading = true
       }, 
       getHomepageDataSuccess:(state,{payload}) =>{
        state.slider = payload
        state.movie = payload
        state.tvshow = payload
        state.movielegacy = payload
        state.loading = false
       }
    }
})

export const homepageAction = homepageSlice.actions;
export default homepageSlice;