import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <nav className="project-navigation">
                <ul className="menu vertical">
                    <li>
                        <a href="#" className="row">
                            <span className="text medium-8 columns">Issues</span>
	  		<span className="medium-4 columns text-center icon" title="Issues">
	  			<i className="fi-database"></i>	 
	  		</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="row">
                            <span className="text medium-8 columns">Members</span>
	  		<span className="medium-4 columns text-center icon" title="Members">
	  			<i className="fi-torsos"></i>	
	  		</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="row">
                            <span className="text medium-8 columns">Archive</span>
	  		<span className="medium-4 columns text-center icon" title="Archive">
	  			<i className="fi-trash"></i>	
	  		</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="row">
                            <span className="text medium-8 columns">Settings</span>
	  		<span className="medium-4 columns text-center icon" title="Settings">
	  			<i className="fi-widget"></i>	  
	  		</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navigation;