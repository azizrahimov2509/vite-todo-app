import {useState} from "react";
import "./style.css";

function Header(){
    const [show,setShow] = useState(true);


    return(
        <header> 
    <div className='container header-container'>
       <a href='#' className='logo'><span>LO</span>GO</a>
      <nav>
        <ul className='list'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
       <a href="#" className="signIn">Sign in</a>
    </div>
   </header>
    );
}

export default Header;