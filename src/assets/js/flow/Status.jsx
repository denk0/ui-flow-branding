import React from 'react';

class Status extends React.Component {

    render() {
        const {status} = this.props;

        return (
            <div className="column column-block">
                <div className="wrapper">
                    <h4 className="column-title">{status.displayName}.</h4>
                    <div className="card task">
                        <h5 className="task-title">Task name</h5>
                        <p className="tasl-description">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Maiores, aliquam.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Status;