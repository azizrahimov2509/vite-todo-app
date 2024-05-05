import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Todos from "./components/Todos";

export default function App() {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>}>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/about" element={<About />}></Route>

        </Route>
      </>
    )
  );
  
  return <RouterProvider router={router}/>

}


