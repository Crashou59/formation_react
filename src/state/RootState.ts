import { PlayerType } from "../type/PlayerType";

export interface RootState {
    players: PlayerType[],
    selected: PlayerType
}