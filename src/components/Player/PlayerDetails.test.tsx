import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { PlayerDetails } from './PlayerDetails';

describe('PlayerDetails coponent', () => {

    const firstPlayer = { nom: 'koala', prenom: 'koala2', nickname: 'nickname koala' };
    const wrapper = shallow(<PlayerDetails player={firstPlayer} />);

    it('Should render player details component', () => {
        expect(wrapper.find('p').length).toEqual(3);
        expect(wrapper.find(".Player-details").exists()).toEqual(true);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<PlayerDetails player={firstPlayer} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});