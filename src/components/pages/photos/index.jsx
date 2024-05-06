import React, { useState,useEffect} from 'react';


export default function Photos(){
    const [data, setData] = useState(null);
   
   
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>res.json())
    .then((result)=>{
      setData(result.slice(0,16));
        console.log(result.slice(0,20));
    })
  },[])
   
    return(
        <main>
            <div className="container">
            <h2 style={{textTransform:"capitalize"}}>Photos</h2>
                <ul className="todos-list">
                    {data ? data.map((item) => {
                        return <li className="list-item" key={item.id}>
                        
                        <p style={{ marginRight: "auto", display: "inline-block", fontSize:"25px" }}>Id: <span style={{fontSize:"19px",color:"white"}}>{item?.id}</span></p>
                        <img src={item?.url} style={{width:"150px", height:"150px"}} alt="item.title" />
                            <p style={{ marginRight: "auto", display: "inline-block", fontSize:"25px" }}>Title: <span style={{fontSize:"19px",color:"white"}}>{item?.title ?? item?.name ?? item?.body }</span></p>
                        </li>
                    }) : "There is no data :("}
                </ul>
            </div>
        </main>
    )
}