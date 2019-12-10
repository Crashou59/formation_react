import React from 'react';
import { PlayerType } from '../../type/PlayerType';


type MyProps = {
    onPlayerChange: (p: PlayerType) => void;
    player: PlayerType;
};
export const PlayerDisplay = (props: MyProps) => <ul>
    <li>
        <span onClick={() => props.onPlayerChange(props.player)}> {props.player.nickname}</span>
    </li>
</ul>;  