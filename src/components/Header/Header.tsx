
import React from 'react';

type MyProps = {
    /** Le nickname à afficher */
    nickname?: string;
};
/** Super composant qui affiche mon nickname <3 <3 <3*/
export const Header = (props: MyProps) => <span>Hey !! {props.nickname} !</span>;
