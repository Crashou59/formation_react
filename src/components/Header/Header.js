
import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nickname: 'titi' };
    }

    render() {
        return <span>Hey !! {this.state.nickname} !</span>;
    }
}
