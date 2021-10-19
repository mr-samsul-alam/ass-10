import React from 'react';
import { Link } from 'react-router-dom';
 

const NotFound = () => {
    return (
        <div>
            <img style={{width: "50%"}} src="/404.jpg" alt="" />
            <br />
            <Link to="/"><button className="btn btn-primary p-2 m-4">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;