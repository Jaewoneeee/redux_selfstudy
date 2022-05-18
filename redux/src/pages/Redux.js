import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Redux = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.reduce.count)
    const text1 = useSelector((state) => state.reduce.text1)
    const text2 = useSelector((state) => state.reduce.text2)
    const navigate = useNavigate()
  
    //const [count, setCount] = useState(0)
    //const [text, setText] = useState('')
  
    const changeCount = () => {
      //setCount(count + 1) 
      dispatch({type : "COUNT", payload : {num:2}})
    }
  
    const changeText = () => {
      //setText("잘 나옴")
      dispatch({type : "TEXT", payload : {text1 : "redux", text2 : "study"}})
    }

    const changePage = () => {
        navigate('/middle')
    }
  
    return (
      <div>
        <h3>{count}</h3>
        <h3>{text1}</h3>
        <h3>{text2}</h3>
        <button onClick={()=>changeCount()}>카운트</button>
        <button onClick={()=>changeText()}>텍스트</button>
        <br/>
        <button onClick={()=>changePage()}>미들웨어 페이지</button>
      </div>
    );
}

export default Redux