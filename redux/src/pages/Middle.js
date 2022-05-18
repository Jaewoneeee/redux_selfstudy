import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../redux/action/get'
import { post } from '../redux/action/post'

const Middle = () => {

    const navigate = useNavigate()
    //const [getData, setGetData] = useState()
    //const [postData, setPostData] = useState()

    const dispatch = useDispatch()

    const getData = useSelector((state) => state.middle.get)
    const postData = useSelector((state) => state.middle.post)

    const changePage = () => {
        navigate('/')    
    }

    const getApi = () => {
        dispatch(get.getApi())
        // try {
        //     const datas = await axios.get('http://localhost:4000/api')
        //     console.log(datas)
        //     setGetData(datas.data.data)
        // } 
        // catch(error) {
        //     console.error(error)
        // }
    }
    
    const postApi = () => {
        dispatch(post.postApi())
        // try {
        //     const datas = await axios.post('http://localhost:4000/api2', {
        //         data : "POST요청 성공"
        //     })
        //     console.log(datas)
        //     setPostData(datas.data)

        // }
        // catch(error) {
        //     console.error(error)
        // }
    }


  return (
    <div>
        미들웨어~
        <br/>
        <h3>{getData}</h3>        
        <button onClick={()=>getApi()}>데이터 GET요청</button>
        <br/>
        <h3>{postData}</h3>        
        <button onClick={()=>postApi()}>데이터 POST요청</button>
        <br/>
        <button onClick={()=>changePage()}>리덕스 페이지</button>
    </div>
  )
}

export default Middle