import React from 'react';
import { PlayerType } from './Player';

type MyProps = {
    onPlayerChange: (index: number) => void;
    players: PlayerType[];
};
export class PlayerList extends React.Component<MyProps>{

    render() {
        return <div className="Player-list">
            <p>Players : </p>
            <ul>
                <li>
                    <span onClick={() => this.props.onPlayerChange(0)}> {this.props.players[0].nickname}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span onClick={() => this.props.onPlayerChange(1)}>{this.props.players[1].nickname}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span onClick={() => this.props.onPlayerChange(2)}>{this.props.players[2].nickname}</span>
                </li>
            </ul>
        </div>
            ;
    }
}