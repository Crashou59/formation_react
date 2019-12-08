import React from 'react';

export const PlayerDetails = (props) => <div className="Player-details panel">
    <p> Nom : {props.player.nom} </p>
    <p> Prenom : {props.player.prenom}</p>
    <p> Nickname : {props.player.nickname}</p>
</div>;
