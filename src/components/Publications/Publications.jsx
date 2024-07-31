import React from 'react';
import './Publications.css'
import PublicationCard from '../PublicationCards/PublicationCard';

const Publications = () =>{
    return(
        <div className="PublicationSets">
            <div className='Intro'>
                <span>
                    Published Works
                </span>
                <br/>
                <span>
                    Check out my research works over the year!!! Links, desciption and audios of all the research work is available.
                </span>
            </div>
            <div className="p-Card">
                <div>
                     <PublicationCard PublicationType="Research article" JournalName='Nature Communications'  Title= 'Orphan quality control by an SCF ubiquitin ligase directed to pervasive C-degrons' DateOfPublication='December 15, 2023' doi='doi/10.1038/s41467-023-44096-z'/>
                </div>
            </div>
                       

        </div>
    )
}

export default Publications