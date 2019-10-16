import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	width: 100vw;
	max-width: 100%;
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const H1 = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	font-family: Roboto, sans-serif;
	font-weight: 500;
	margin: 30px 0 5px 0;
	${({ theme }) => theme.media.tablet} {
		font-size: 1.3rem;
	}
	${({ theme }) => theme.media.tabletLandscape} {
		font-size: 1.5rem;
	}
	${({ theme }) => theme.media.desktop} {
		font-size: 1.8rem;
	}
	${({ theme }) => theme.media.bigDesktop} {
		font-size: 2.5rem;
	}
`;

const H2 = styled.h1`
	font-family: 'Montserrat Semibold', sans-serif;
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	font-weight: 400;
	margin: -5px 0 20px 0;
	font-size: 1rem;
	${({ theme }) => theme.media.bigDesktop} {
		font-size: 1.3rem;
	}
`;

const TitleLine = styled.div`
	width: 62vw;
	height: 5px;
	background: ${({ theme }) => theme.colors.white};
	position: relative;
	margin: 10px 0;
`;

const HowWrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	${({ theme }) => theme.media.tablet} {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-start;
		min-height: 40%;
	}
	${({ theme }) => theme.media.bigDesktop} {
		min-height: 50%;
	}
`;

const HowContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	${({ theme }) => theme.media.tablet} {
		width: 45%;
		flex-direction: column;
		justify-content: center;
		align-content: flex-start;
	}
	${({ theme }) => theme.media.bigDesktop} {
		width: 45%;
		padding: 50px;
	}
`;

const Number = styled.div`
	position: absolute;
	font-family: 'Montserrat Semibold', sans-serif;
	top: 15px;
	left: 0;
	font-size: 2rem;
	${({ theme }) => theme.media.tablet} {
		left: -40px;
	}
	${({ theme }) => theme.media.desktop} {
		left: 0;
	}
	${({ theme }) => theme.media.bigDesktop} {
		left: 50px;
		top: 60px;
		font-size: 2.4rem;
	}

	::after {
		content: "";
		position: absolute;
		left: 20px;
		top: 50px;
		width: 5px;
		height: ${({ longer }) => (longer ? '65px' : '45px')};
		background: ${({ theme }) => theme.colors.white};
		${({ theme }) => theme.media.tablet} {
			height: 60px;
		}
		${({ theme }) => theme.media.bigDesktop} {
			height: 100px;
		}
	}
`;

const Title = styled.h3`
	font-family: 'Montserrat Semibold', sans-serif;
	padding: 20px 0 20px 60px;
	font-size: 1.2rem;
	margin: 0;
	text-align: center;
	${({ theme }) => theme.media.bigDesktop} {
		font-size: 1.6rem;
		text-align: center;
	}
`;

const Text = styled.p`
	font-family: 'Roboto', sans-serif;
	margin: 0;
	margin-left: auto;
	max-width: 220px;
	font-size: .7rem;
	/* padding: 23px 0 15px 60px; */
	padding-top: ${({ padding }) => padding};
	${({ theme }) => theme.media.tablet} {
		max-width: 350px;
		font-size: .80rem;
	}
	${({ theme }) => theme.media.bigDesktop} {
		font-size: 1.2rem;
		max-width: 470px;
	}
`;

class How extends Component {
	constructor(props) {
		super(props);
	}
	

	render() {
		return (
			<Wrapper>
				<StyledWrapper>
					<H1>3 STEPS</H1>
					<TitleLine />
					<H2>Keep it simple</H2>

					<HowWrapper>
						<HowContainer>
							<Number>01</Number>
							<Title>Research</Title>
							<Text>
								Understand the client’s needs. Collect all information. Determine methods and techniques
								to fit all requirements. Do research.
							</Text>
						</HowContainer>

						<HowContainer>
							<Number longer>02</Number>
							<Title>Design</Title>
							<Text>
								Create a web design. Use examples, concepts and all details provided to prepare some
								sketches, wireframes and style guide so we can finally start to prototype the finish
								product.
							</Text>
						</HowContainer>

						<HowContainer>
							<Number longer>03</Number>
							<Title>Development</Title>
							<Text>
								If we have the design and it is accepted we may proceed to the next final phase which is
								web development and deployment. We are going to make web page alive in the browser using
								all utilities provided in designing phase.
							</Text>
						</HowContainer>
					</HowWrapper>
				</StyledWrapper>
			</Wrapper>
		);
	}
}

export default How;