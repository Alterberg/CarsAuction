import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Car`s Auction</h1>
        <p>Laborum officia occaecat duis non occaecat incididunt eiusmod reprehenderit commodo sunt tempor officia culpa nostrud.</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;
