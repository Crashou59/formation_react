import React from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';
import { PlayerDetails } from './PlayerDetails';
import { selectPlayer } from './../../actions/PlayerActions';
import { connect } from 'react-redux'

class Player extends React.Component {
    render() {
        return <>
            <PlayerList players={this.props.players} onPlayerChange={(p) => this.props.selectPlayer(p)} />
            <PlayerDetails player={this.props.selected} />
        </ >;
    }
}

const mapStateToProps = state => ({
    players: state.players,
    selected: state.selected
});

const mapDispatchToProps = dispatch => ({
    selectPlayer: (p) => dispatch(selectPlayer(p))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player)

