import React from 'react'
import Nav from './Nav'
import Banner from './Banner'

const Header = ({ setLoggedIn, loggedIn }) => {
  return (
    <div>
      {loggedIn ?
        <Nav setLoggedIn={setLoggedIn} /> : <Banner />}
    </div>
  )
}

export default Header;