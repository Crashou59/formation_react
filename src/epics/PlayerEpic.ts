
import { map } from 'rxjs/operators';
import { ofType } from "redux-observable";
import { PlayerActions, addPlayerDone } from '../actions/PlayerAction';

export default (action$: any, state$: any) => action$.pipe(
    ofType(PlayerActions.ADD_PLAYER_CALL),
    map((action: any) => {
        return addPlayerDone(action.player);
    })
);