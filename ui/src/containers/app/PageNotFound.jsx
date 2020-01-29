import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <center>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <Link to="/dashboard">Return to Home Page</Link>
        </center>
    </div>
);
export default PageNotFound;