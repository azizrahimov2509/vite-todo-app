import {useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header(){
    const [show,setShow] = useState(true);


    return(
        <header> 
    <div className='container header-container'>
       <a href='#' className='logo'><span>LO</span>GO</a>
      <nav>
        <ul className='list'>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/photos">Photos</Link></li>
          <li><Link to="/user">Users</Link></li>
        </ul>
      </nav>
       <a href="#" className="signIn">Sign in</a>
    </div>
   </header>
    );
}

export default Header;