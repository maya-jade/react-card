import React from 'react'
import css3 from './css3.svg'
import html5 from './html5.svg'
import wordpress from './wordpress.svg'
import reactapp from './react.svg'
import javascript from './javascript.svg'

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