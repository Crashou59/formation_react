import React from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';

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

    selectPlayer(selected: PlayerType) {
        this.setState({
            selected
        });
    }

    render() {
        return <>
            <PlayerList players={this.state.players} onPlayerChange={(p: PlayerType) => this.selectPlayer(p)} />
            <div className="Player-details">
                <p> Nom : {this.state.selected.nom} </p>
                <p> Prenom : {this.state.selected.prenom}</p>
                <p> Nickname : {this.state.selected.nickname}</p>
            </div>
        </ >;
    }
}