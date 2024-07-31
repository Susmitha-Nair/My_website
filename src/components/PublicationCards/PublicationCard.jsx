import React from 'react';
import './PublicationCard.css';

const PublicationCard=({PublicationType,JournalName,Title,DateOfPublication,doi})=>{
    return(
        <div className="publicationCard">
            <span>
                {PublicationType}
            </span>
            <span>
                {JournalName}
            </span>
            <span>
                {Title}
            </span>
            <span>
                {DateOfPublication}
            </span>
            <span>
                <a href='https://www.nature.com/articles/s41467-023-44096-z#article-info'>
                {doi}
                </a>
            </span>
            <button className='button p-download'> Download pdf </button>
        </div>
    )
}

export default PublicationCard