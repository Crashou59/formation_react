import { PlayerType } from "../type/PlayerType"

export const loadPLayerList = () => ({
    type: 'LOAD_PLAYER_LIST'
})

export const selectPlayer = (player: PlayerType) => ({
    type: 'SELECT_PLAYER',
    player
})

export const addPlayerCall = (player: PlayerType) => ({
    type: 'ADD_PLAYER_CALL',
    player
})

export const addPlayerDone = (player: PlayerType) => ({
    type: 'ADD_PLAYER_DONE',
    player
})

export const addPlayerError = (error: any) => ({
    type: 'ADD_PLAYER_ERROR',
    error
})



export const PlayerActions = {
    LOAD_PLAYER_LIST: 'LOAD_PLAYER_LIST',
    SELECT_PLAYER: 'SELECT_PLAYER',
    ADD_PLAYER_CALL: 'ADD_PLAYER_CALL',
    ADD_PLAYER_DONE: 'ADD_PLAYER_DONE',
    ADD_PLAYER_ERROR: 'ADD_PLAYER_ERROR'
}