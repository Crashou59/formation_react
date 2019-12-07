import React from 'react';
import { mount } from 'enzyme';
import { retrivePlayersLastName, Player } from './Player';

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

describe('Player component', () => {

	const container = mount(<Player />);

	const localState = {
            players: [{ nom: 'my name', prenom: 'my first name', nickname: 'my nickname' }],
            selected: {}
        };
    container.setState(localState);

it('Should have state and no props', () => {
expect(container.instance().state).toEqual(localState);
expect(container.instance().props).toEqual({});
});

});