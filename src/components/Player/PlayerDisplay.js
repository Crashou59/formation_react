
import React from 'react';
export class PlayerDisplay extends React.Component {

    render() {
        return <ul>
            <li>
                <span onClick={() => this.props.onPlayerChange(this.props.player)}> {this.props.player.nickname}</span>
            </li>
        </ul>;
    }
}