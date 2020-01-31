import React from 'react'
import { Link } from 'react-router-dom';

export default function ServerError() {
    return (
        <div>
            <center>
                <h1>500</h1>
                <h3>Server Error</h3>
                <Link to="/dashboard">Return to Home Page</Link>
            </center>            
        </div>
    )
}
