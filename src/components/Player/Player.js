import React from 'react';
import './Player.css';
import { PlayerList } from './PlayerList';

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

    selectPlayer(index) {
        this.setState({
            selected: this.state.players[index]
        });
    }

    render() {
        return <>
            <PlayerList players={this.state.players} onPlayerChange={(index) => this.selectPlayer(index)} />
            <div className="Player-details">
                <p> Nom : {this.state.selected.nom} </p>
                <p> Prenom : {this.state.selected.prenom}</p>
                <p> Nickname : {this.state.selected.nickname}</p>
            </div>
        </ >;
    }
}
