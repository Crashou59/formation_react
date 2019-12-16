import React, { useState, useEffect } from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';
import { PlayerDetails } from './PlayerDetails';
import { connect, ConnectedProps } from 'react-redux'
import { selectPlayer } from '../../actions/PlayerAction';
import { PlayerType } from '../../type/PlayerType';
import { RootState } from '../../state/RootState';

const mapStateToProps = (state: RootState) => ({
    players: state.players,
});

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type MyProps = PropsFromRedux & {
}

export const retrivePlayersLastName = (players: PlayerType[]) => {
    if (!Array.isArray(players)) {
        return [];
    }
    return players.map(player => player.nom).filter(elm => elm);
};


const Player = (props: MyProps) => {

const [selectedPlayer, setSelectedPlayer] = useState<PlayerType>({});
useEffect(() => {
    document.title = `${selectedPlayer.nom || 'Title'}`;
  }, [selectedPlayer]);

    return <>
        <PlayerList players={props.players} onPlayerChange={(p) => setSelectedPlayer(p)} />
        <PlayerDetails player={selectedPlayer} />
    </ >;

}

export default connector(Player)