import React from 'react'
// import { Button } from "@material-tailwind/react";


function NavButton() {
  return (
    <div className="flex w-max gap-6">
  
        <button className="nav-button" style={{border:'solid black 1px', padding:'10px', borderRadius:'8px', }}>About me</button>
        <button className="nav-button" style={{border:'solid black 1px', padding:'10px'}}>Projects</button>
        <button className="nav-button" style={{border:'solid black 1px', padding:'10px'}}>Resume</button>
        <button className="nav-button" style={{border:'solid black 1px', padding:'10px'}}>Contact me</button>
    </div>
  )
}

export default NavButton;