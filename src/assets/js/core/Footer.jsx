import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="row expanded">
                    <div className="small-12 columns menu-centered">
                        <ul className="menu">
                            <li><a href="{{root}}/home.html">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                    <div className="small-12 columns text-center">&copy; 2017, UI Flow Branding. All
                        rights reserved.
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;