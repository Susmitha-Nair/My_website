import React from 'react';
import './Experience.css';
import Block from '../Block/Block';

const Experience = () =>{
    return(
        <div className='ExperienceSet'>
            <div className='e-left'>
                <div className='e-block'>
                    <div style={{top:'2rem', left:'2rem'}}>
                        <Block quantity='5+' detail='years of Bioinformatics Research' />
                     </div>
                     <div style={{top:'-6rem', left:'12rem'}}>
                        <Block quantity='8' detail='successfully completed projects' />
                     </div>
                     <div style={{top:'2rem', left:'22rem'}}>
                        <Block quantity='3' detail='Research Institute' />
                     </div>
                     <div style={{top:'-6rem', left:'32rem'}}>
                        <Block quantity='6' detail='Conference Participation' />
                     </div>
                </div>              
            </div>
            <div className='e-right'>
                <span>
                    Experience
                </span>
                <br/>
                <span>
                    lkugrel iugimgounc8 ecgfoewcfup iuxyrfiorqfnu843opqfu eiunxweuryxo ixnhwiornfuopf uxhnxfuionyoprxf iurxwenhofrenfh
                </span>
                <div className='blur e-blur'></div>
                <div className='blur e-blur2'></div>
                    
                
            </div>

        </div>
    )
}

export default Experience