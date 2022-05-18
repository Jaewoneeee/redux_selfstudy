import axios from "axios"

// action은 그냥 함수야
function getApi() {
    return async (dispatch, getState) => {
        try {
            const datas = await axios.get('http://localhost:4000/api')
            console.log(datas)
            //setGetData(datas.data.data)
            let test = datas.data.data
            console.log(test)
            dispatch({type : "GET_DATA", payload : {test}})
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const get = {getApi}