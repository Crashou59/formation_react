import { PlayerActions } from "../actions/PlayerAction";


const defaultState = {
    players: [{ nom: 'toto', prenom: 'toto', nickname: 'ToToR ' },
    { nom: 'you', prenom: 'you', nickname: 'La Fleche Noire du Maroc' },
    { nom: 'JuL', prenom: 'JuL', nickname: 'elGossBoDu59' }],
    selected: {}
}

const PlayerReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case PlayerActions.LOAD_PLAYER_LIST:
            return { ...state };
        case PlayerActions.SELECT_PLAYER:
            return { ...state, selected: action.player };
        case PlayerActions.ADD_PLAYER:
            return { ...state, players: [...state.players, action.player] };
        default:
            return state
    }
}

export default PlayerReducer