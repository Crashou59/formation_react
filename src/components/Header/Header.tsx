
import React from 'react';

type MyProps = {
    nickname: string;
};

export const Header = (props: MyProps) => <span>Hey !! {props.nickname} !</span>;
