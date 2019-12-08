import { PlayerType } from "../type/PlayerType"

export const loadPLayerList = () => ({
    type: 'LOAD_PLAYER_LIST'
})

export const selectPlayer = (player: PlayerType) => ({
    type: 'SELECT_PLAYER',
    player
})

export const addPlayer = (player: PlayerType) => ({
    type: 'ADD_PLAYER',
    player
})


export const PlayerActions = {
    LOAD_PLAYER_LIST: 'LOAD_PLAYER_LIST',
    SELECT_PLAYER: 'SELECT_PLAYER',
    ADD_PLAYER: 'ADD_PLAYER'
}