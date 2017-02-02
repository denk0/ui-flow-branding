import React from "react";

class Header extends React.Component {

    render() {
        return (
            <header className="site-header">
                <div className="row expanded">
                    <div className="title-bar" data-responsive-toggle="primary-menu"
                         data-hide-for="large">
                        <button className="menu-icon" type="button"
                                data-toggle="primary-menu"></button>
                        <div className="title-bar-title">Menu</div>
                    </div>

                    <div className="top-bar" id="primary-menu">
                        <div className="top-bar-left">
                            <ul className="dropdown menu" data-dropdown-menu>
                                <li className="menu-text show-for-large">
                                    <button type="button" className="menu-icon"
                                            data-toggle="project-navigation"></button>
                                </li>
                                <li><a href="../">Main</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>
                                    <a href="#">Projects</a>
                                    <ul className="menu vertical">
                                        <li><a href="{{root}}project-main.html">Project 1</a></li>
                                        <li><a href="#">Two</a></li>
                                        <li><a href="#">Three</a></li>
                                        <li><a className="button" href="#">New</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Issues</a>
                                    <ul className="menu vertical">
                                        <li><a href="#">One</a></li>
                                        <li><a href="#">Two</a></li>
                                        <li><a href="#">Three</a></li>
                                        <li><a className="button" href="#">New</a></li>
                                    </ul>
                                </li>
                                <li className="menu-text"><a href="#" className="button">Create</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;