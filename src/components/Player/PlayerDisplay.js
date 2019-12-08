import React from 'react';

export const PlayerDisplay = (props) => <ul>
    <li>
        <span onClick={() => props.onPlayerChange(props.player)}> {props.player.nickname}</span>
    </li>
</ul>;  