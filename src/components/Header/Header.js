import React, { useState } from 'react';
import styled from 'styled-components';
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
import Hamburger from '../Hamburger/Hamburger';

const HeaderWrapper = styled.div`
	height: 10%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0 20px;
	border: none;
	background: ${({ hidden }) =>
		hidden ? 'linear-gradient(to right, #545353 -200%, transparent, #545353 300%)' : 'linear-gradient(to right, #545353 -30%, transparent, #545353 130%)'};
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 99;
	${({ theme }) => theme.media.desktop} {
		padding: 0 100px;
	}
	transition: all 1s ease-in-out;
`;

const Lang = styled.button`
	cursor: pointer;
	border: none;
	background: none;
	margin: 0;
	padding: 8px 15px;
	display: inline-block;
	position: relative;
	z-index: 99;
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.2rem;
	margin-bottom: 2px;

	${({ theme }) => theme.media.desktop} {
		font-size: 1rem;
	}

	&:hover {
		animation: woobleSocial .25s ease-in-out;
		color: ${({ theme }) => theme.colors.red};
	}

	@keyframes woobleSocial {
		0% {
			transform: translateY(0px);
		}
		25% {
			transform: translateY(-2px);
		}
		50% {
			transform: translateY(-4px);
		}
		75% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0px);
		}
	}
`;

const Header = () => {
	//using react hooks for open state menu
	const [ isMenuOpen, setMenuState ] = useState(false);

	const toggleMobileMenu = () => {
		setMenuState(!isMenuOpen);
	};

	//hide or show navbar background (increase visibility)
	const [ isNavbarHidden, setNavbarBackground ] = useState(true);

	const toggleNavbarBackground = () => {
		setNavbarBackground(!isNavbarHidden);
	};

	const checkBackground = () => {
		var isScrolling;

		window.addEventListener(
			'scroll',
			function(event) {
				// Clear our timeout throughout the scroll
				window.clearTimeout(isScrolling);

				// Set a timeout to run after scrolling ends
				isScrolling = setTimeout(function() {
					let y = window.scrollY;

					if (y > 0 && isNavbarHidden === true) {
						toggleNavbarBackground();
					} else if (y === 0 && isNavbarHidden === false) {
						toggleNavbarBackground();
					}
				}, 60);
			},
			false
		);
	};

	checkBackground();

	return (
		<HeaderWrapper hidden={isNavbarHidden}>
			<MenuMobile isOpen={isMenuOpen} />
			<Lang>PL</Lang>
			<MenuDesktop />
			<Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
		</HeaderWrapper>
	);
};

export default Header;