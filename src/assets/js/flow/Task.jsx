import React from 'react';

class Task extends React.Component {

    render() {
        const {task} = this.props;

        return (
            <div className="card task">
                <h5 className="task-title">{task.title}</h5>
                <p className="task-description">{task.description}</p>
            </div>
        );
    }
}

export default Task;