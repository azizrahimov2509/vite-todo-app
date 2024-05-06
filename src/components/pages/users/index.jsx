
import React, { useState,useEffect} from 'react';


export default function Users(){
    const [data, setData] = useState(null);
   
   
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
    .then((result)=>{
      setData(result.slice(0,16));
        console.log(result.slice(0,20));
    })
  },[])
   
    return(
        <main>
            <div className="container">
            <h2 style={{textTransform:"capitalize"}}>Users</h2>
                <ul className="todos-list">
                    {data ? data.map((item) => {
                        return <li className="list-item" key={item.id}>
                        <p style={{ marginRight: "auto", display: "inline-block", fontSize:"25px" }}>Id: <span style={{fontSize:"19px",color:"white"}}>{item?.id}</span></p>
                            <p style={{ marginRight: "auto", display: "inline-block",fontSize:"25px" }}>Name:<span style={{fontSize:"19px",color:"white"}}>{item?.name}</span></p>
                            <p style={{ marginRight: "auto", display: "inline-block",fontSize:"25px" }}>Username:<span style={{fontSize:"19px",color:"white"}}>{item?.username}</span></p>
                            <p style={{ marginRight: "auto", display: "inline-block",fontSize:"25px" }}>Email: <a href='#' style={{fontSize:"19px",textStyle:"italic"}}>{item?.email}</a></p>
                        </li>
                    }) : "There is no data :("}
                </ul>
            </div>
        </main>
    )
}