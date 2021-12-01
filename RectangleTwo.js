import React from 'react'
import mail from './mail.svg'
import linkedIn from './linkedin.svg'

function RectangleTwo() {
    return (
        <div>
            <span className="rectangle-two"></span>
            <h1 className ="maya-jade">Maya Jade</h1>
            <h2 className="frontend">Frontend Developer</h2>
            <h3 className="website"><a href="https://maya-jade.dev">maya-jade.dev</a></h3>
            <a href="mailto: mayajade.dev@gmail.com"target="_blank" rel ="noreferrer"><button className="email-button"><img id="envelope" src={mail} alt=""></img>Email</button></a>
            <a href="https://www.linkedin.com/in/mayajade/" target="_blank" rel ="noreferrer"><button className="linkedin-button"><img id="linkedinlogo" src={linkedIn} alt=""></img>LinkedIn</button></a>
            <h3 className="about-title">About</h3>
            <p className="about-me">I am a frontend developer with a passion for engaging, creative, and responsive sites built with the user in mind. I am always looking for new ways to improve and keeping up-to-date with the latest in tech is what keeps the fire burning.</p>
            <h3 className="interests-title">Interests</h3>
            <p className="interests-para">Foodie. Internet fanatic. Gamer. Anime watcher. Space nerd. Entrepreneur. Traveler. Coffee enthusiast. Animal lover.</p>
        </div>

    )
}

export default RectangleTwo
