import React from 'react'
import Form from './Pages/Form'
import Map from './Pages/Map'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/form" exact element={<Form />} />
          <Route path="/map" exact element={<Map />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
