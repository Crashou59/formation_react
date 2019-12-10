import React from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';
import { PlayerDetails } from './PlayerDetails';
import { connect, ConnectedProps } from 'react-redux'
import { selectPlayer } from '../../actions/PlayerAction';
import { PlayerType } from '../../type/PlayerType';
import { RootState } from '../../state/RootState';

const mapStateToProps = (state: RootState) => ({
    players: state.players,
    selected: state.selected
});

const mapDispatchToProps = {
    selectPlayer: (p: PlayerType) => selectPlayer(p)
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type PropsFromRedux = ConnectedProps<typeof connector>

type MyProps = PropsFromRedux & {
}

export const retrivePlayersLastName = (players: PlayerType[]) => {
    if (!Array.isArray(players)) {
        return [];
    }
    return players.map(player => player.nom).filter(elm => elm);
};


const Player = (props: MyProps) =>
    <>
        <PlayerList players={props.players} onPlayerChange={(p) => props.selectPlayer(p)} />
        <PlayerDetails player={props.selected} />
    </ >;

export default connector(Player)