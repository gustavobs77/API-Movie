import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Pages/Home"
import Filmes from "./Pages/Filmes"
import Header from "./Components/Header/Index"

function RouteApp (){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/filme/:id" element={<Filmes/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;