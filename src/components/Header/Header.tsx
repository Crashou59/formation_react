
import React from 'react';

type MyProps = {
    nickname: string;
};
type MyState = {
    nickname: string;
};
export class Header extends React.Component<MyProps, MyState> {

    state: MyState = { nickname: 'titi' };

    componentDidMount() {
        this.updateNickname(this.props);
    }

    updateNickname(props: MyProps) {
        this.setState({
            nickname: props.nickname
        });
    }


    render() {
        return <span>Hey !! {this.state.nickname} !</span>
    }
}
