let initialState = {
    count : 0,
    text1 : '',
    text2 : ''
}

function reducer(state=initialState, action) {
    console.log(action)
    // action에 담겨있는 놈들을 빼서 쓰겠다. 객체안에 있는 key값들을 빼낸거지
    let {type, payload} = action 

    // 이제 스위치문 들어가면 되는거지
    switch(type) {

        case "COUNT" :
            return {...state, count : state.count + payload.num}

        case "TEXT" :
            return {...state, text1 : payload.text1 , text2 : payload.text2}

        default :
            return {...state}
    }
}

export default reducer