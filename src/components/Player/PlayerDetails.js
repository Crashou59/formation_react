import React from 'react';

export class PlayerDetails extends React.Component {

    render() {
        return <div className="Player-details panel">
            <p> Nom : {this.props.player.nom} </p>
            <p> Prenom : {this.props.player.prenom}</p>
            <p> Nickname : {this.props.player.nickname}</p>
        </div>;
    }
}