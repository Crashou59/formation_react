
import React from 'react';
import { PlayerDisplay } from './PlayerDisplay';

export class PlayerList extends React.Component {

    render() {
        return <div className="Player-list">
            <p>Players : </p>
            {this.props.players.map(p =>
                <PlayerDisplay key={p.nickname} player={p} onPlayerChange={(pl) => this.props.onPlayerChange(pl)} />)}
        </div>;
    }
}