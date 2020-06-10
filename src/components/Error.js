import React from 'react';
import {NavLink} from 'react-router-dom';

// Create error component for 404 error
const Error = () =>
(
    <div>
        <NavLink className="error-link" to='/'>← GO TO HOME</NavLink>

        <h1 className="error-message">Page Not Found</h1>
        <p className="error-code">Error 404</p>
    </div>
);

export default Error;
