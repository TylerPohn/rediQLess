/**
 * This is a JSX container that imports AuthorProfile JSX component and iterates over the authorData
 * to generate the author information for the page
 * @param {string} name is the name of the author
 * @param {string} image is the url of the image
 * @param {string} info is some information about the author
 * @param {string} github is the github url of the author
 * @param {string} linkedin is the linkedin url of the author
 */
import React from 'react';
import AuthorProfile from '../components/authors';
import authorData from '../util/authorinfo';

//pulling in AuthorData and passing it as props to the Author components which will be typed via their interface defined in that component.
const AuthorsContainer = () => {

	return (
		<div className="border-2 border-deeppink-default flex flex-wrap items-center text-center m-10 px-4 py-6 bg-darkblue-lighter shadow-2xl rounded-lg md:flex-col md:m-30 md:py-3 md:px-3">
			{authorData.map((el, index:number) => {
			return <AuthorProfile key={index} name={el.name} image={el.image} info={el.info} github={el.github} linkedin={el.linkedin}/>
		})}	
		</div>		
	)
}

export default AuthorsContainer;