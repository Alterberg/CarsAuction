import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from "./SearchForm";

const Header = () => {
    const activeStyle = { color: "#F15B2A" };

    return (
        <div className="row">
            <div className="col-md-6 float-left">
                <nav>
                    <NavLink to="/" activeStyle={activeStyle} exact>
                        Home
                    </NavLink>
                    {" | "}
                    <NavLink to="/cars" activeStyle={activeStyle}>
                        Cars
                    </NavLink>
                    {" | "}
                    <NavLink to="/about" activeStyle={activeStyle}>
                        About
                    </NavLink>
                </nav>
            </div>
            <div className="col-md-6 float-right">
                <div className="container">
                    <SearchForm />
                </div>
            </div>
            
            
        </div>
    );
}

export default Header;