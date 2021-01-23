import React from 'react';
import Poster from './Three/Poster';

function BuildPoster({poster}) {


	const Posters = poster.map((_) => {
		return <Poster position={_.position} size={_.size} texture={`/${_.texture}`} key={_.posterId}/>
	})
	return Posters
}
export default BuildPoster;