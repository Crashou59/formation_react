import React from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';
import { PlayerDetails } from './PlayerDetails';
import { selectPlayer } from './../../actions/PlayerActions';
import { connect } from 'react-redux'


export const retrivePlayersLastName = players => {
    if (!Array.isArray(players)) {
        return [];
    }
    return players.map(player => player.nom).filter(elm => elm);
};

const Player = (props) =>
    <>
        <PlayerList players={props.players} onPlayerChange={(p) => props.selectPlayer(p)} />
        <PlayerDetails player={props.selected} />
    </ >;



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

