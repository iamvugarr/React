import React from 'react'
import "./welcome.css"
import logo from "../../Assets/welcome.svg"

const Welcome = () => {
    return (
        <section className='welcome-section'>
            <div className="welcome-container">
                <div className="row-center">
                    <div className="row-container">
                        <img src={logo} alt="" />
                        <h1>Welcome to my portfolio!</h1>
                        <p>I am a graphic artist, illustrator, and UI designer specializing in modern, creative design based in Wildemount, TX
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome;

