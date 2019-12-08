import React from 'react';
import { PlayerType } from './Player';

type MyProps = {
    player: PlayerType;
};
export class PlayerDetails extends React.Component<MyProps> {

    render() {
        return <div className="Player-details">
            <p> Nom : {this.props.player.nom} </p>
            <p> Prenom : {this.props.player.prenom}</p>
            <p> Nickname : {this.props.player.nickname}</p>
        </div>;
    }
}