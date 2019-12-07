
export const loadPLayerList = () => ({
    type: 'LOAD_PLAYER_LIST'
})

export const selectPlayer = player => ({
    type: 'SELECT_PLAYER',
    player
})

export const addPlayer = player => ({
    type: 'ADD_PLAYER',
    player
})

export const PlayerActions = {
    LOAD_PLAYER_LIST: 'LOAD_PLAYER_LIST',
    SELECT_PLAYER: 'SELECT_PLAYER',
    ADD_PLAYER: 'ADD_PLAYER'
}