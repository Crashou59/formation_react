import { PlayerActions } from "../actions/PlayerActions"

const defaultState = {
    players: [{ nom: 'toto', prenom: 'toto', nickname: 'ToToR ' },
    { nom: 'you', prenom: 'you', nickname: 'La Fleche Noire du Maroc' },
    { nom: 'JuL', prenom: 'JuL', nickname: 'elGossBoDu59' }],
    selected: {},
    error: ''
}

const PlayerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PlayerActions.LOAD_PLAYER_LIST:
            return { ...state };
        case PlayerActions.SELECT_PLAYER:
            return { ...state, selected: action.player };
        case PlayerActions.ADD_PLAYER_DONE:
            return { ...state, players: [...state.players, action.player] };
        case PlayerActions.ADD_PLAYER_ERROR:
            return { ...state, error: action.error }
        default:
            return state
    }
}

export default PlayerReducer