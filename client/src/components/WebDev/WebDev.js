import React from 'react'

// CSS
import './WebDev.css'

// components
import NavBar from '../NavBar'
import GitHubCal from '../GItHubCal'

class WebDev extends React.Component {
  render() {
    return (
        <div>
        <NavBar />
        <GitHubCal />
        </div>
    )
  }
}
export default WebDev