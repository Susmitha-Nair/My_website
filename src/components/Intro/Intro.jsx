import React from 'react';
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Susmitha_profile from "../../img/Susmitha_profile.png";
import thumnup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return(
        <div className='intro'>
            <div className = "i-left">
            <div className="i-name">
                    <span>Hello!!  I am</span>
                    <span>Susmitha</span>
                    <span>I am a bioinformatician, specializing in statistics, machine learning, natural language processing and data visualization. I develop scalable solutions for complex biological data problems. </span>
                </div>
                <button className='button i-button'>Let's connect!</button>
                <div className='i-icons'>
                    <img src={Github} alt=''/>
                    <a href='https://www.linkedin.com/in/susmitha-shankar/'>
                        <img src={LinkedIn} alt=''/>
                    </a>
                    <img src={Instagram} alt=''/>
                </div>
            </div>

            <div className = "i-right">
                <img src={Vector1} alt = ''/>
                <img src={Vector2} alt = ''/>
               <img src={Susmitha_profile} alt = ''/>
                <img src = {glassesimoji} alt = ''/>
               <div style = {{top:'-4%', left:'12.5rem'}}>
                <FloatingDiv image = {Crown} txt1 = 'Data' txt2 = 'Scientist'/>
               </div>
               <div style = {{top:'18rem', left:'-1rem'}}>
                <FloatingDiv image = {thumnup} txt1 = "Doctorate in" txt2 = "Bioinformatics" />
               </div>
            {/* blur divs */}
            <div className='blur' style={{background:"rgb (238 210 255)"}}></div>
            </div>
            <div className='blur2' style={{background:'#7f25d4bc'}}></div>
            <div className='blur3' style={{background:'#138ebfa5'}}></div>
            <div className='blur4' style={{background:'#10cfa2a5'}}></div>
            <div className='blur5' style={{background:'#aedd13c5'}}></div>
            <div className='blur6' style={{background:'#f1424296'}}></div>
            </div>
            


    )
}

export default Intro