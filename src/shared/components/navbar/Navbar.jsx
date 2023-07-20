import { GoKebabHorizontal } from 'react-icons/go';
import { IoIosArrowBack, IoIosRemoveCircleOutline } from 'react-icons/io';
import { BiSolidEdit } from 'react-icons/bi';
import { BsInfoSquare, BsUpload } from 'react-icons/bs';
import { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);

	const handleMenuClick = () => {
		setToggleDropdown(!toggleDropdown);
	};

	return (
		<nav className="nav-container">
			<button>
				<IoIosArrowBack className="nav-btn hoveritem" />
			</button>

			<div className="nav-title">Bitcoin Wallet</div>

			<button onClick={handleMenuClick}>
				<GoKebabHorizontal className="nav-btn kebab" />
			</button>

			{toggleDropdown && (
				<ul className="space-vertically dropdown-menu card-shadow">
					<li className="dropdown-link">
						<button className="align-link-horizontally">
							Edit <BiSolidEdit className="dropdown-link-icon" />
						</button>
					</li>
					<li className="dropdown-link">
						<button className="align-link-horizontally">
							Courier Info <BsInfoSquare className="dropdown-link-icon" />
						</button>
					</li>
					<li className="dropdown-link">
						<button className="align-link-horizontally">
							Share <BsUpload className="dropdown-link-icon" />
						</button>
					</li>
					<li className="dropdown-link-remove-btn">
						<button
							onClick={() => setToggleDropdown(false)}
							className="align-link-horizontally"
						>
							Remove <IoIosRemoveCircleOutline className="dropdown-link-icon" />
						</button>
					</li>
				</ul>
			)}
		</nav>
	);
};
