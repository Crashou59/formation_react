import { PlayerActions, addPlayerDone, addPlayerError } from "../actions/PlayerActions";
import { map } from 'rxjs/operators';
import { ofType } from "redux-observable";

export default (action$, state$) => action$.pipe(
    ofType(PlayerActions.ADD_PLAYER_CALL),
    map(action => {
        return addPlayerDone(action.player);
    })
);
