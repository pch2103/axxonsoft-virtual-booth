import React from 'react';
import Poster from './Three/Poster';
import PosterWalpha from "./Three/PosterWalpha";

function BuildPoster({poster}) {

	const Posters = poster.map((_) => {
		return _.alphaMap
				? <PosterWalpha
						position={_.position}
						size={_.size}
						rotation={
							_.rotation ?
									[_.rotation[0] * Math.PI/180, _.rotation[1] * Math.PI/180, _.rotation[2] * Math.PI/180]
									: [0, 0, 0]
						}
						texture={`/${_.texture}`}
						alphaMap={`/${_.alphaMap}`}
						key={_.posterId}
				/>
				: <Poster
				position={_.position}
				size={_.size}
				rotation={
					_.rotation ?
							[_.rotation[0] * Math.PI/180, _.rotation[1] * Math.PI/180, _.rotation[2] * Math.PI/180]
							: [0, 0, 0]
				}
				texture={`/${_.texture}`}
				key={_.posterId}
		/>
	})
	return Posters
}
export default BuildPoster;