
import React, { useContext }  from 'react';
import { favoriteLanguageContext } from '../../App';

type MyProps = {
    nickname: string;
};

export const Header = (props: MyProps) => {
		const favoriteLanguage = useContext(favoriteLanguageContext);
	if (favoriteLanguage === 'english') {
		return <span>Hello {props.nickname} this is a text in {favoriteLanguage}</span>;
	} else if (favoriteLanguage === 'frensh') {
		return <span>Bonjour {props.nickname} c'est un texte en français</span>;
	} else return <span>{props.nickname}</span>;
}
