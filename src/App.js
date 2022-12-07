import React from 'react'
import Form from './Pages/Form'
import Map from './Pages/Map'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/form" exact element={<Form />} />
          <Route path="/map" exact element={<Map />} />
          <Route path="/" exact element={<Home />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
