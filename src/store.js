import {configureStore} from '@reduxjs/toolkit'
import heroeReducer from './Features/counter/HeroeSlice'

export default configureStore({
    reducer:{
        heroe: heroeReducer
    }
})