import React from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';
import { PlayerDetails } from './PlayerDetails';
import { Registration } from './../Registration/Registration';

export type PlayerType = {
    nom?: string;
    prenom?: string;
    nickname?: string;
};

type MyState = {
    players: PlayerType[];
    selected: PlayerType;
};
export class Player extends React.Component<{}, MyState> {

    state: MyState = {
        players: [{ nom: 'toto', prenom: 'toto', nickname: 'ToToR ' },
        { nom: 'you', prenom: 'you', nickname: 'La Fleche Noire du Maroc' },
        { nom: 'JuL', prenom: 'JuL', nickname: 'elGossBoDu59' }],
        selected: {}
    }

    registrationEvent(p: PlayerType) {
        this.setState({ players: [...this.state.players, p] });
    }

    selectPlayer(selected: PlayerType) {
        this.setState({
            selected
        });
    }

    render() {
        return <>
            <PlayerList players={this.state.players} onPlayerChange={(p: PlayerType) => this.selectPlayer(p)} />
            <PlayerDetails player={this.state.selected} />
            <Registration onRegistration={(p) => this.registrationEvent(p)} />
        </ >;
    }
}