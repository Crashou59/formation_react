import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './../src/components/Header/Header';
import { withKnobs, text } from "@storybook/addon-knobs";


storiesOf('Header', module)
    .addDecorator(withKnobs)
    .add('default', () => <Header />)
    .add('toto', () => <Header nickname="toto" />)
    .add('dynamic nickname', () => <Header nickname={text("nickname", "toto")} />)

