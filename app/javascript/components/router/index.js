import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// LAYOUTS
import Main from '../layouts/Main'
// import Admin from '../layouts/Admin'
// VIEWS
import HomeScreen from '../views/Home/HomeScreen'
import BlogScreen from '../views/Blog/BlogScreen'
import ArticleScreen from '../views/Blog/ArticleScreen'
import EventScreen from '../views/Events/EventScreen'

const RoutesList = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={ <HomeScreen /> } />
          <Route path='events' element={ <EventScreen /> } />
          <Route path='blog' element={ <BlogScreen /> } />
          <Route path='blog/:slug?' element={ <ArticleScreen /> } />
        </Route>
      </Routes>
    </Router>
  )

}

export default RoutesList
