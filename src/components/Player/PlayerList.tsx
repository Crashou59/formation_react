import React from 'react';
import { PlayerType } from './Player';
import { PlayerDisplay } from './PlayerDisplay';

type MyProps = {
    onPlayerChange: (p: PlayerType) => void;
    players: PlayerType[];
};
export class PlayerList extends React.Component<MyProps>{

    render() {
        return <div className="Player-list">
            <p>Players : </p>
            {this.props.players.map(p =>
                <PlayerDisplay key={p.nickname} player={p} onPlayerChange={(pl) => this.props.onPlayerChange(pl)} />)}
        </div>;

    }
}