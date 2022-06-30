import {createSlice} from '@reduxjs/toolkit'
const homepageSlice = createSlice({
    name:'homepagedata',
    initialState:{
        movie:[],
        tvshow:[],
        movielegacy:[],
        loading:"true"
    },
    reducers:{
       getHomepageData: state =>{
        state.loading = true
       }, 
       getHomepageDataSuccess:(state,{payload}) =>{
        state.movie = payload
        state.tvshow = payload
        state.movielegacy = payload
        state.loading = false
       }
    }
})

export const{getHomepageData,getHomepageDataSuccess} = homepageSlice.actions;
export default homepageSlice;