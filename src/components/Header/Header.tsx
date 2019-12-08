
import React from 'react';

type MyProps = {
    nickname: string;
};
export class Header extends React.Component<MyProps> {

    render() {
        return <span>Hey !! {this.props.nickname} !</span>
    }
}
