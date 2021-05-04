import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
    <div>
        <h1>404</h1>
        <h3>Page not found</h3>
        <p>Try to return the 
         <Link to="/" > home page</Link>
        </p>
    </div>
)

export default PageNotFound;