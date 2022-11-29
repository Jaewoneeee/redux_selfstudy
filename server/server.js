const express = require('express')
const app = express()
//const port = 4000 // <- 3000에서 다른 숫자로 변경
const port = 4000 // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: axios } = require('axios');
//const axios = axios()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Server!")
})

app.get('/api', (req, res) => {
  res.send({ data : 'GET요청 성공'})
})

app.post('/api2', (req, res) => {
    console.log(req.body)
    res.send(req.body.data)
  })

app.post('/test', (req, res) => {
    console.log(req.body)
    res.send(req.body.data)
  })

  // const getApi = () => {
  //   const response = axios.post('http://43.200.43.76:8545', {
  //     "jsonrpc":"2.0",
  //     "method":"eth_gasPrice",
  //     "params":[],
  //     "id":5
  // })
  // return response;
  // test = response
  //​console.log(response)

  //};


  function postApi() {
    return async () => {
        try {
            const datas = await axios.post('http://43.200.43.76:8545', {
                "jsonrpc":"2.0",
                "method":"eth_gasPrice",
                "params":[],
                "id":5
            })
            console.log(datas)
            //setPostData(datas.data)
            // let test =  datas.data
            // dispatch({type : "POST_DATA", payload : {test}})
        }
        catch(error) {
            console.error(error)
        }
    }
}

postApi()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})