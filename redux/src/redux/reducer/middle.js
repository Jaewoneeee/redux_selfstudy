let initialState = {
    get : '',
    post : ''
}

function middleware(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_DATA" :
            return {...state, get : payload.test }

        case "POST_DATA" :
            return {...state, post : payload.test}

        default :
            return {...state}
    }
}

export default middleware