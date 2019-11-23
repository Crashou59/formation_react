
import React from 'react';
export class PlayerList extends React.Component {

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