import React from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';
import { PlayerDetails } from './PlayerDetails';
import Registration from '../Registration';

export const retrivePlayersLastName = players => {
    if (!Array.isArray(players)) {
        return [];
    }
    return players.map(player => player.nom).filter(elm => elm);
};

export class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [{ nom: 'toto', prenom: 'toto', nickname: 'ToToR ' },
            { nom: 'you', prenom: 'you', nickname: 'La Fleche Noire du Maroc' },
            { nom: 'JuL', prenom: 'JuL', nickname: 'elGossBoDu59' }],
            selected: {}
        }
    }

    selectPlayer(selected) {
        this.setState({
            selected
        });
    }

    registrationEvent(newPlayer) {
        this.setState({ players: [...this.state.players, newPlayer] });
    }

    render() {
        return <>
            <PlayerList players={this.state.players} onPlayerChange={(p) => this.selectPlayer(p)} />
            <PlayerDetails player={this.state.selected} />
            <Registration onRegistration={p => this.registrationEvent(p)} />
        </ >;
    }
}
