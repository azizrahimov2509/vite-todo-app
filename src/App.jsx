import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Todos from "./components/Todos";
import Photos from "./components/pages/photos";
import Users from "./components/pages/users";
import './App.css'
import Posts from "./components/pages/about";

export default function App() {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>}> 
        <Route path="/" element={<Todos />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/todos" element={<Todos/>}></Route>
        <Route path="/user" element={<Users />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        </Route>
      </>
    )
  );
  
  return <RouterProvider router={router}/>

}


