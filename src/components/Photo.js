import React from 'react';

// Create Pic function component
const Photo = (props) =>
(
    <li>
        <img src={props.url} alt={props.alt}/>
    </li>
);

// Export component
export default Photo;