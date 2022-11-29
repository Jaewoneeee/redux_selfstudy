// import { createStore , applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducer'

//let store = createStore(rootReducer, applyMiddleware(thunk) )

// =========== redux toolkit update =============
// 기존 redux에선 아래 작업들을 일일히 다 설정해줘야 했었는데 
// toolkit 에서는 이 모든게 다 자동 셋업이 되어있다 !!

// combineReducers 
// thunk 
// applyMiddleware  
// composeWithDevTools 

import { configureStore } from '@reduxjs/toolkit'
import middleware from './reducer/middle'

const store = configureStore({
    reducer:{
        middle : middleware 
    }
});


export default store;