import React, { useContext } from 'react';
import { favoriteLanguageContext } from '../../App';

export const Header = (props) => {
 const {favoriteLanguage, setFavoriteLanguage} = useContext(favoriteLanguageContext);
 
 if (favoriteLanguage === 'english') {
 	return <span onClick={() => setFavoriteLanguage('french')}>
 	Hello {props.nickname} this is a text in {favoriteLanguage}
 	</span>
 } else if (favoriteLanguage === 'french') {
 	return <span onClick={() => setFavoriteLanguage('english')}>
 	Bonjour {props.nickname} c'est un texte en français
 	</span>
 }
};