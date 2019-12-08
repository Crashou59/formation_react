import React from 'react';
import { PlayerType } from '../../type/PlayerType';


type MyProps = {
    onPlayerChange: (p: PlayerType) => void;
    player: PlayerType;
};
export class PlayerDisplay extends React.Component<MyProps> {

    render() {
        return <ul>
            <li>
                <span onClick={() => this.props.onPlayerChange(this.props.player)}> {this.props.player.nickname}</span>
            </li>
        </ul>;
    }
}