import { retrivePlayersLastName } from './Player';

describe('retrivePlayersLastName', () => {

it('Should return players last name', () => {
const players = [{ nom: 'my name' }, { nom: 'Juju' }];
const result = [ 'my name', 'Juju' ];

expect(retrivePlayersLastName(players)).toEqual(result);
});

it('Should return players last name who has last name', () => {
const players = [{ nom: 'my name' }, { prenom: 'Juju' }];
const result = [ 'my name' ];

expect(retrivePlayersLastName(players)).toEqual(result);
});

it('Should return an empty array if players is empty', () => {
expect(retrivePlayersLastName([])).toEqual([]);
});

it('Should return an empty array if players is not an array', () => {
expect(retrivePlayersLastName({})).toEqual([]);
});

});