import React from 'react';
import { PlayerDisplay } from './PlayerDisplay';
import { PlayerType } from '../../type/PlayerType';

type MyProps = {
    onPlayerChange: (p: PlayerType) => void;
    players: PlayerType[];
};
export class PlayerList extends React.Component<MyProps>{

    render() {
        return <div className="Player-list">
            <p>Players : </p>
            {
                this.props.players.map(p =>
                    <PlayerDisplay key={p.nickname} player={p} onPlayerChange={(pl: PlayerType) => this.props.onPlayerChange(pl)} />)
            }
        </div>;

    }
}