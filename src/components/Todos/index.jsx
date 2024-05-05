import React from "react";
import {Link} from 'react-router-dom'

export default function Todos(){
    return(
        <main>
            <div className="container">
            
                <Link to="/about">About</Link>
            </div>
        </main>
    )
}