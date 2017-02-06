import React from 'react';

class Breadcrumbs extends React.Component {
    render() {
        return (
            <div className="row expanded show-for-medium">
                <div className="small-12 columns">
                    <nav aria-label="You are here:" role="navigation">
                        <ul className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Featured projects</a></li>
                            <li className="disabled"><span className="show-for-sr">Current: </span> Single project</li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Breadcrumbs;