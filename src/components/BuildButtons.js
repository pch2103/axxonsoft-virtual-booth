import React from "react";
import Button from "./Three/Button";

function BuildButtons({button}) {
	console.log('button', button)
	return button.map((_) => {
			return <Button
					position={_.position}
					size={_.size}
					rotation={
						_.rotation ?
								[_.rotation[0] * Math.PI/180, _.rotation[1] * Math.PI/180, _.rotation[2] * Math.PI/180]
								: [0, 0, 0]
					}
					texture={`/${_.texture}`}
					alphaMap={`/${_.alphaMap}`}
					textureHover={`/${_.textureHover}`}
					alphaMapHover={`/${_.alphaMapHover}`}
					buttonId={_.buttonId}
					link={_.link}
					key={_.buttonId}
			/>
	})
}

export default BuildButtons;