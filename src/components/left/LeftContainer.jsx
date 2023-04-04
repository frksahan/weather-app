import React from 'react'
import Logo from "./assets/logo.png"

function LeftContainer() {
    return (
        <div>
            <img src={Logo} />
            <h1>Weather<b>App</b></h1>
            <p>Choose a City</p>
            <input type="text" placeholder='Enter City Name' />
            <button>SEE WEATHER!</button>
            <a href="">Contact Me</a>
        </div>
    )
}

export default LeftContainer

