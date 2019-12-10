import React from 'react';
import { PlayerType } from '../../type/PlayerType';


type MyProps = {
    player: PlayerType;
};
export const PlayerDetails = (props: MyProps) => <div className="Player-details panel">
    <p> Nom : {props.player.nom} </p>
    <p> Prenom : {props.player.prenom}</p>
    <p> Nickname : {props.player.nickname}</p>
</div>;