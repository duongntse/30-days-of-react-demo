import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ auth, logout, ...rest }) => {
	return (
		<div className='navbar'>
			<Link to='/' className='logo'>
				<i className='fa fa-user'></i>
				Logon
			</Link>
			<div className='actions'>
				{auth.isLoggedIn ? (
					<div className='logout' onClick={logout}>
						<Link to='#'>Logout</Link>
					</div>
				) : (
					<div className='login'>
						<Link to='/login'>Login please</Link>
					</div>
				)}
				<Link to='/about' className='about'>
					About
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
