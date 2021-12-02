import React from 'react'
import selfie from '../Img/selfie.jpg'
import mail from '../Img/mail.svg'
import linkedIn from '../Img/linkedin.svg'
import css3 from '../Img/css3.svg'
import html5 from '../Img/html5.svg'
import wordpress from '../Img/wordpress.svg'
import reactapp from '../Img/react.svg'
import javascript from '../Img/javascript.svg'

function Card() {
    return (
        <div className="container">
            <img src={selfie} alt="selfie"></img>
            <div className="card-body">
            <h1 className ="maya-jade">Maya Jade</h1>
            <h2 className="frontend">Frontend Developer</h2>
            <h3 className="website"><a href="https://maya-jade.dev">maya-jade.dev</a></h3>
            <div className="button-section">
            <a href="mailto: mayajade.dev@gmail.com"target="_blank" rel ="noreferrer"><button className="email-button"><img id="envelope" src={mail} alt=""></img>Email</button></a>
            <a href="https://www.linkedin.com/in/mayajade/" target="_blank" rel ="noreferrer"><button className="linkedin-button"><img id="linkedinlogo" src={linkedIn} alt=""></img>LinkedIn</button></a>
            </div>
            <h3>About</h3>
            <p>I am a frontend developer with a passion for engaging, creative, and responsive sites built with the user in mind. I am always looking for new ways to improve and keeping up-to-date with the latest in tech is what keeps the fire burning.</p>
            <h3>Interests</h3>
            <p>Foodie. Internet fanatic. Gamer. Anime watcher. Space nerd. Entrepreneur. Traveler. Coffee enthusiast. Animal lover.</p>
            </div>
            <footer className="social-footer">
            <div className="footer-icons">
                <img src={html5} alt="HTML5"></img>
                <img src={css3} alt="CSS3"></img>
                <img src={javascript} alt="Javascript"></img>
                <img src={reactapp} alt="React"></img>
                <img src={wordpress} alt="Wordpress"></img>
            </div>
        </footer>
        </div>

    )
}

export default Card
