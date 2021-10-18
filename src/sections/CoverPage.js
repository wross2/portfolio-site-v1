import React from 'react';
import Typewriter from 'typewriter-effect';
import "./styles/cover-page.css";


const CoverPage = (props) => {
    const greeting = `Hello, my name is William Ross`;
        //const greetingFontSize = window.innerWidth < 500 ? '1.4rem' : '3.0rem';
        //console.log(window.innerWidth)
    return (
    <div className="cover-page">
    <Typewriter
        options={{
            wrapperClassName: "Typewriter__wrapper cover-greeting",
            cursorClassName: "Typewriter__cursor greeting-cursor"
        }}
        onInit={(typewriter) => {typewriter
            .start()
            .pauseFor(2500)
            .stop()
            .changeDelay(100)
            .typeString(greeting)
            .start();
        }}
    /></div>)
}


export default CoverPage