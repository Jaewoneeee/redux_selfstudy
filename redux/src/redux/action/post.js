import axios from "axios"
import { testActions } from '../reducer/middle'

function postApi() {
    return async (dispatch, getState) => {
        try {
            const datas = await axios.post('https://eth.public-rpc.com', {
                "jsonrpc":"2.0",
                "method":"eth_gasPrice",
                "params":[],
                "id":9
            })
            console.log(datas)
            //setPostData(datas.data)
            let test =  datas.data.result
            //dispatch({type : "POST_DATA", payload : {test}})
            dispatch(testActions.postData({test}))
        }
        catch(error) {
            console.error(error)
        }
    }
}

export const post = {postApi}