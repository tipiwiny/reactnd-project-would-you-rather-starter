import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({authorized, onLogout}) => (
    <nav>
    <div className="nav-wrapper" style={{padding:'0px 20px'}}>
      {!authorized ? <a href="/" className="brand-logo left">Welcome to the Survey APP</a> : 
      (<ul className="right">
        <li key={1}><Link to='/home'>Home</Link></li>
        <li key={3}><Link to='/newquestion'>New Question</Link></li>
        <li key={2}><Link to='/leaderboard'>Leader Board</Link></li>
        <li key={4}><div onClick={onLogout}><Link to="/">Logout</Link></div></li>
     </ul>)
     }
    </div>
  </nav>
)

export default Header;