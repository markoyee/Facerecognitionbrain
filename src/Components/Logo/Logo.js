import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import globe from './globe.png'

//pure function below that simple return nav
const Logo = () => {
	return(
		<div>
			<Tilt className="Tilt center br2 shadow-2 mg-20" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
			 	<div className="Tilt-inner pa3">
			 		<img style= {{padding:'10px'}}alt='globe' src={globe}/>
			 	</div>
			</Tilt>
		</div>

	)
}

export default Logo;