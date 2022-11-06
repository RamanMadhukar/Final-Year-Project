import React from 'react'
import Form from './Pages/Form'
import Map from './Pages/Map'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Form />} />
          <Route path="/map" exact element={<Map />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
