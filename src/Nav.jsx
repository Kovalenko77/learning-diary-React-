import React from 'react'
// import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <ul>
          <li>
            {/* <Link to="/">Home</Link>  */}
            <p>Home</p>
          </li>
          <li>
            {/* <Link to="/">Tracker</Link> */}
            <p>Tracker</p>
          </li>
      </ul>
    </nav>
  )
}

export default Nav