
import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nickname: 'titi' };
    }

    componentDidMount() {
        this.updateNickname(this.props);
    }

    updateNickname(props) {
        this.setState({
            nickname: props.nickname
        });
    }

    render() {
        return <span>Hey !! {this.state.nickname} !</span>;
    }
}
