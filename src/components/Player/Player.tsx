import React from 'react';
import './Player.css';

type PlayerType = {
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

    selectPlayer(index: number) {
        this.setState({
            selected: this.state.players[index]
        });
    }

    render() {
        return <>
            <div className="Player-list">
                <p>Players : </p>
                <ul>
                    <li>
                        <span onClick={() => this.selectPlayer(0)}> {this.state.players[0].nickname}</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span onClick={() => this.selectPlayer(1)}>{this.state.players[1].nickname}</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span onClick={() => this.selectPlayer(2)}>{this.state.players[2].nickname}</span>
                    </li>
                </ul>
            </div>
            <div className="Player-details">
                <p> Nom : {this.state.selected.nom} </p>
                <p> Prenom : {this.state.selected.prenom}</p>
                <p> Nickname : {this.state.selected.nickname}</p>
            </div>
        </ >;
    }
}