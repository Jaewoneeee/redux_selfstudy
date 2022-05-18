import axios from "axios"

function postApi() {
    return async (dispatch, getState) => {
        try {
            const datas = await axios.post('http://localhost:4000/api2', {
                data : "POST요청 성공"
            })
            console.log(datas)
            //setPostData(datas.data)
            let test =  datas.data
            dispatch({type : "POST_DATA", payload : {test}})
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const post = {postApi}