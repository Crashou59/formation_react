import React, { useState, useEffect } from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';
import { PlayerDetails } from './PlayerDetails';
import { selectPlayer } from './../../actions/PlayerActions';
import { connect } from 'react-redux'


export const retreivePlayersLastName = players => {
    if (!Array.isArray(players)) {
        return [];
    }
    return players.map(player => player.nom).filter(elm => elm);
};

const Player = (props) => {

    const [selectedPlayer, setSelectedPlayer] = useState({});

    useEffect(() => {
    document.title = `${selectedPlayer.nom || 'Title'}`;
  });

return <>
        <PlayerList players={props.players} onPlayerChange={(p) => setSelectedPlayer(p)} />
        <PlayerDetails player={selectedPlayer} />
    </ >;
}

const mapStateToProps = state => ({
    players: state.players
});

export default connect(mapStateToProps)(Player)

