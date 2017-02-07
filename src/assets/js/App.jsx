import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './core/Header.jsx';
import Board from './view/Board.jsx';
import Footer from './core/Footer.jsx';
import * as boardActions from './redux/actions/boardActions';

class App extends React.Component {

    render() {
        const {board, boardActions} = this.props;
        return (
            <div className="app-container">
                <Header />
                <Board
                    board={board}
                    actions={boardActions}/>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.board
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boardActions: bindActionCreators(boardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);