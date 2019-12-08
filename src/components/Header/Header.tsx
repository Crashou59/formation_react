
import React from 'react';

type MyProps = {
    nickname: string;
};
type MyState = {
    nickname: string;
};
export class Header extends React.Component<MyProps, MyState> {

    state: MyState = { nickname: 'titi' };

    render() {
        return <span>Hey !! {this.state.nickname} !</span>
    }
}
