import React from 'react';

//pure function below that simple return nav
const Navigation = ({onRouteChange,isSignedIn}) => {
		if (isSignedIn) {
			return (
					<nav 
					style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p
					onClick={()=>onRouteChange('signout')} 
					className='f4 link display dim underlined pa3 pointer'>Sign out
					</p>
					</nav>
			) 

		}else {
			return (
					<nav 
					style={{display: 'flex', justifyContent: 'flex-end'}}>
						<p onClick={()=>onRouteChange('home')} 
						className='f4 link display dim underlined pa3 pointer'>
						Sign In!
						</p>
						<p onClick={()=>onRouteChange('home')} 
						className='f4 link display dim underlined pa3 pointer'>
						Register!
						</p>
					</nav> 

			);
		}
}


export default Navigation;