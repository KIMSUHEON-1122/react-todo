/* 
    무한루프에 빠진 fetch를 한번만 불러옴 
    useEffect() hooks은 react component를 원할때만 실행하게 함 
    렌더링 될때마다 특정 작업을 실행
    */
import { useEffect, useState } from "react"
import React from 'react'

const Products = () => {
const [count, setCount] = useState(0);
const [products, setProducts] = useState([]);

useEffect(()=>{
    fetch("data/products.json")
    .then(res=>res.json())//json함수 호출, 불러온 문서가 json
    .then(data=>{
        //data를 응답 받은 후의 로직
        console.log("데이터 받아옴");
        setProducts(data);
    });
    return () => {
        //컴포넌트가 언 마운트 될 때
        console.log("깨끗하게 청소하는 일을 합니다.")
    }
    //계속 패치가 일어남 -
}, []) //deps를 비워 놓으면 아무런 디펜던시가 전달되지 않음. 
//비워놓지 않으면 []가 변경될대마다 함수가 실행됨. 
    
    
    return (
    <div>
        <ul>
            {products.map((product)=>(
                <li>
                    <h3>제품명 : {product.name}</h3>
                    <p>제품명 : {product.price}</p>
                </li>
            ))}
        </ul>
        <button 
        style={{padding:"10px", backgroundColor:"yellow"}}
        onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
    </div>
  )
}

export default Products

/* 
    fetch("api주소")
    .then(res=>res.json())
    .then(res=>{//data를 응답 받은 후의 로직})

*/