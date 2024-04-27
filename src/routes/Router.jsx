import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crud from '../Crud'
import Create from '../Create'
import Update from '../Update'

function Router() {

    return (
        <BrowserRouter>
            <Routes>    
                <Route path="/" element={<Crud />} />
                <Route  path="/create" element={ <Create/>}/>
                <Route  path="/update/:id" element={ <Update/>}/>

            </Routes>
        </BrowserRouter>


    )
}

export default Router