import React from 'react';
import "./Block.css";

const Block = ({quantity, detail}) =>{
    return(
        <div className='block'>
                    <span>
                {quantity}
            </span>
            <span>
                {detail}
            </span>
            
        </div>
    )
}

export default Block