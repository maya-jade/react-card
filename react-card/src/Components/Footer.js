import React from 'react'
import css3 from '../Img/css3.svg'
import html5 from '../Img/html5.svg'
import wordpress from '../Img/wordpress.svg'
import reactapp from '../Img/react.svg'
import javascript from '../Img/javascript.svg'

function Footer() {
    return (
        <footer className="social-footer">
            <div className="footer-icons">
                <img src={html5} alt="HTML5"></img>
                <img src={css3} alt="CSS3"></img>
                <img src={javascript} alt="Javascript"></img>
                <img src={reactapp} alt="React"></img>
                <img src={wordpress} alt="Wordpress"></img>
            </div>
        </footer>
    )
}

export default Footer