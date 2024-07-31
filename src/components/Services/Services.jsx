import React from 'react';
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Card from '../Card/Card';
import Resume from './SusmithaShankar_Resume.pdf'


const Services = () => {
    return(
   <div className='Services'>
    <div className='Awesome'>
        <span>My awesome</span>
        <span>Services</span>
        <br/>
        <spane>
            data I want to writehblewjcbkvznfdlvmed.vkn JKA kjenbwvjbkscnv lkv /md.kjvbjhcbvqLicundVL NWFCBIvubLUwabcI:anc;kjb cLUVBIURAEV WXDBcgbUIVHJFD;JVN edcbfdicubldvludbv
        </spane>
        <a href = {Resume} download>
               <button className='button s-button'> Download CV </button>
        </a>
        <div className='blur s-blur' style={{background: '#ABF1FF94'}}></div>
    </div>
       <div className='cards'>
            <div style={{left : '0rem', top : '-3rem'}}>
                <Card emoji = {HeartEmoji} headline = "Mentorship" details = 'Machine Learning, Bioinformatics, Research design'/>
            </div>
            <div style={{left : '-13rem', top : '10rem'}}>
                <Card emoji = {HeartEmoji} headline = "Consultant" details = 'Machine Learning, Bioinformatics, Research design'/>
            </div>
            <div style={{top: ' 10rem', left: '12rem'}}>
                <Card emoji={Glasses} headline = "Collaboration" details = 'Bioinformatics, Interpretable AI, Drug Development' />
            </div>
            <div style={{top:'-3rem', left:'24rem'}}>
                <Card emoji = {Glasses} headline = "Data Analysis" details = "Statistics, Machine Learning, Drug Development, Bioinformatics" />
            </div>
       </div>
       <div className='blur s-blur2' ></div>
   </div>
    )
}

export default Services