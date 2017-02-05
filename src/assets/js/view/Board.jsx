import React from "react";
import Breadcrumbs from '../core/Breadcrumbs.jsx';
import Navigation from '../core/Navigation.jsx';

class Board extends React.Component {

    componentDidMount() {
       this.props.actions.fetchApplications();
    }

    render() {
        return (
            <div className="content"> {/* board start */}
                <div className="secondary-navigation">
                    <Navigation /> {/* project navigation component */}
                </div>
                <main className="main-content">
                    <Breadcrumbs /> {/* breadcrumbs component */}
                    <div className="row expanded medium-up-5 small-up-1">
                        <div className="column column-block">
                            <div className="wrapper">
                                <h4 className="column-title">To do</h4>
                                <div className="card task">
                                    <h5 className="task-title">Task name</h5>
                                    <p className="tasl-description">Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Maiores, aliquam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="column column-block">
                            <div className="wrapper">
                                <h4 className="column-title">Doing</h4>
                                <div className="card task">
                                    <h5 className="task-title">Task name</h5>
                                    <p className="tasl-description">Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Maiores, aliquam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="column column-block">
                            <div className="wrapper">
                                <h4 className="column-title">Done</h4>
                                <div className="card task">
                                    <h5 className="task-title">Task name</h5>
                                    <p className="tasl-description">Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Maiores, aliquam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="column column-block">
                            <div className="wrapper">
                                <h4 className="column-title">Reviewing</h4>
                                <div className="card task">
                                    <h5 className="task-title">Task name</h5>
                                    <p className="tasl-description">Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Maiores, aliquam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="column column-block">
                            <div className="wrapper">
                                <h4 className="column-title">Closed</h4>
                                <div className="card task">
                                    <h5 className="task-title">Task name</h5>
                                    <p className="tasl-description">Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Maiores, aliquam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        );
    }
}
export default Board;