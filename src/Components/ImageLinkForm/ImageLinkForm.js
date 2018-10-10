import React from 'react';
import './ImageLinkForm.css'

//pure function below that simple return nav
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div >
			<p className='f3'>
				{`This is app that will detect faces in your puctures.`}
			</p>

			<div className='center'>
				<div id='foremka' className= 'center pa4 br3 shadow-5 w-70'>
					<input className='f4 pa2 w-70 center ' type='text' onChange= { onInputChange }/>
					<button className='w-20 grow f4 link ph3 pv2 dib white bg-light-grey .black-50 ' style={{color:'black'}} onClick={onButtonSubmit}>
						Detect
					</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;