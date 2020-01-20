
import React, { useContext } from 'react';
import { favoriteLanguageContext } from '../../App';

export const Header = (props) => {
	const favoriteLanguage = useContext(favoriteLanguageContext);
	if (favoriteLanguage === 'english') {
		return <span>Hello {props.nickname} this is a text in {favoriteLanguage}</span>;
	} else if (favoriteLanguage === 'french') {
		return <span>Bonjour {props.nickname} c'est un texte en français</span>;
	}
};