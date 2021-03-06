import React from 'react';
import Breadcrumbs from '../core/Breadcrumbs.jsx';
import Navigation from '../core/Navigation.jsx';
import StatusList from '../flow/StatusList.jsx';

class Board extends React.Component {

    componentDidMount() {
        this.props.actions.fetchTasks();
        this.props.actions.fetchStatuses();
    }

    render() {
        const {statuses, tasks} = this.props.board;

        return (
            <div className="content"> {/* board start */}
                <Navigation /> {/* project navigation component */}
                <main className="main-content">
                    <Breadcrumbs /> {/* breadcrumbs component */}
                    <StatusList
                        statuses={statuses}
                        tasks={tasks}/> {/* status list component */}
                </main>
            </div>

        );
    }
}
export default Board;