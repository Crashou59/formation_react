import React from 'react';
import { storiesOf } from '@storybook/react';
import { PlayerDetails } from './../src/components/Player/PlayerDetails';
import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';


storiesOf('PlayerDetails', module)
    .addDecorator(withTests({ results }))
    .add('default', () => <PlayerDetails player={{ nom: 'koala', prenom: 'koala2', nickname: 'nickname koala' }} />)
    .add('tests',
        () => <div>Jest results</div>, { jest: ['PlayerDetails.test.tsx'] })

