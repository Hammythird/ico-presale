import { createSlice} from '@reduxjs/toolkit';
import { setAppState } from '../../redux/features/appStateSlice';

const appKey = process. env.React_App_GTAG + '-config'


const initialState:WalletTypes ={
    currentPage:'',
    updated:0,
    loading: false
}

const getStore = (initialState : any) => {
    try{
        const buf = window.localStorage.getItem(appKey)
        if(buf){
            const json = JSON.parse(buf)
            for(let k in json){
                if(initialState[k] !== undefined){
                    initialState[k] = json[k]
                }
            }
        }
    }catch(err) {
        console.log(err)
    }
    console.log('initstate')
    console.log(initialState)
    return initialState
}

const setStore = (state: any) => {
    console.log('setStore= ')
    console.log(state)
    window.localStorage.setItem(appKey, JSON.stringify(state))
}

export default createSlice({
    name:'launchpad',
    initialState:getStore(initialState),
    reducers:{
        update:(state: any, action) => {
            for (const k in action.payload){
                if(state[k] === undefined) new Error('undefined account item')
                state[k] = action.payload[k]
            }
            console.log('State=')
            console.log(action)
            setAppState(state)
        }
    }
})