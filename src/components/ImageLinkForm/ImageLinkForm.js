import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className= 'f3'> 
				{'Welcome to the Magic Brain App! Just copy&paste an image link from google images with a face in it. The Magical Brain will detect faces with magic!'}
			 </p>
			<div className= 'center'>
				<div className= 'form center pa4 br3 shadow-5'>
					<input className='f4 p2 w-70 center' type= 'tex' onChange={onInputChange}/>
					<button 
					className= 'w-30 grow f4 link ph3 pv2 dib black bg-light-blue'
					onClick = {onButtonSubmit}
					 > Detect </button>
					}
				</div>	
			</div> 
		</div>	
		);
}


export  default ImageLinkForm;