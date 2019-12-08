import React from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';

export type PlayerType = {
    nom?: string;
    prenom?: string;
    nickname?: string;
};

type MyProps = {
    selectPlayer: (index: number) => {};
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

    selectPlayer(index: number) {
        this.setState({
            selected: this.state.players[index]
        });
    }

    render() {
        return <>
            <PlayerList players={this.state.players} onPlayerChange={(index: number) => this.selectPlayer(index)} />
            <div className="Player-details">
                <p> Nom : {this.state.selected.nom} </p>
                <p> Prenom : {this.state.selected.prenom}</p>
                <p> Nickname : {this.state.selected.nickname}</p>
            </div>
        </ >;
    }
}