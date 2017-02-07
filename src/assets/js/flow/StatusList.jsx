import React from 'react';
import Status from './Status.jsx'

class StatusList extends React.Component {

    render() {
        const {statuses} = this.props;

        return (
            <div className="row expanded medium-up-5 small-up-1">
                {statuses.map(status => {
                  return <Status key={status.id}
                                 status={status}
                                 tasks={this.filterByStatus(status.id)} />
                })}
            </div>
        );
    }

    filterByStatus(statusId) {
        return this.props.tasks.filter((app) => app.statusId == statusId);
    }
}

export default StatusList;