import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Main = ({ children }) => {
  return (
    <main>
      <Link to="/">Home</Link>
      <Link to="/events">Eventos</Link>
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default Main
