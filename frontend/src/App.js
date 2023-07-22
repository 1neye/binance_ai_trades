import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './containers/App/Layout';
import LoginPage from './containers/LoginPage/LoginPage';





const App = () => {

  return (<Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<LoginPage />} /> 
      {/* <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<div>No match</div>} />
    </Route>
  </Routes>
  )
}

export default App