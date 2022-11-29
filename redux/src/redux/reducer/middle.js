import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    get : '',
    post : ''
}

// function middleware(state=initialState, action) {
//     let {type, payload} = action
//     switch(type) {
//         case "GET_DATA" :
//             return {...state, get : payload.test }

//         case "POST_DATA" :
//             return {...state, post : payload.test}

//         default :
//             return {...state}
//     }
// }

// =========== redux toolkit update =============

// createSlice : reducer를 만드는걸 도와줌
// 1. name (객체) - action 이름을 만드는데 name이라는 키가 쓰임
// 2. initialState - 기존 initial state 와 같음
// 3. reducers (객체) - swtitch 써가며 만들었던걸 모두 함수러 민들아주면댐

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        getData(state, action){
            state.get = action.payload.data        
        },
        postData(state, action){
            state.post = action.payload.test
        }
    }
})

console.log("createSlice",testSlice)

//export default middleware
export const testActions = testSlice.actions
export default testSlice.reducer