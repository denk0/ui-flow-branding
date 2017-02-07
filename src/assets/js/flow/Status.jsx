import React from 'react';
import Task from './Task.jsx';

class Status extends React.Component {

    render() {
        const {status, tasks} = this.props;

        return (
            <div className="column column-block">
                <div className="wrapper">
                    <h4 className="column-title">{status.displayName}</h4>
                    {tasks.map(task => {
                        return <Task
                            key={task.id}
                            task={task} />
                    })}
                </div>
            </div>
        );
    }
}

export default Status;