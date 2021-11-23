import React, { Component } from 'react'
import Layout from '../../Layout/Layout'
import styled from 'styled-components'
import img from '../../assets/background_about.jpg'

import Technology from '../Technology/Technology'
import ButtonAbout from '../Buttons/ButtonAbout'
import { TimelineMax } from 'gsap'
import src1 from '../../assets/smallpic.png'
import src2 from '../../assets/laptop.png'

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: right bottom;
    background-size: cover; 
    opacity: .13;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  min-height: 800px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    min-height: 450px;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Frame = styled.div`
  position: relative;
  height: 80%;
  min-height: 700px;
  width: 80%;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  background: linear-gradient(
    to left,
    black -280%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;

  h1 {
    position: relative;
    top: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    margin: 30px;
    font-size: 28px;

    ${({ theme }) => theme.media.bigDesktop} {
      font-size: calc(28px + 0.4vw);
    }
  }
  ${({ theme }) => theme.media.tablet} {
    min-height: 350px;
  }
`

const ButtonWrapper = styled.div`
  z-index: 100;
  position: absolute;
  cursor: pointer;
  bottom: -25px;
  margin: 0 auto;
  width: 200px;
  height: 46px;
  padding: 20px;
`

const AboutPicture = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`

const Laptop = styled.div`
  background: url(${src1}) no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  max-width: 200px;
  background-position-x: center;
  ${({ theme }) => theme.media.tablet} {
    background: url(${src2}) no-repeat;
    max-width: unset;
    background-size: contain;
    background-position-y: center;
  }
  ${({ theme }) => theme.media.tabletLandscape} {
    background-position-y: center;
  }
`

const Container = styled.div`
  width: 100%;
  height: 70%;
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    padding: 10% 10%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: normal;
    line-height: 22px;
    ${({ theme }) => theme.media.tablet} {
      padding: 0 5%;
      width: 100%;
    }
    ${({ theme }) => theme.media.desktop} {
      font-size: 18px;
      line-height: 25px;
    }
    ${({ theme }) => theme.media.bigDesktop} {
      font-size: 24px;
      line-height: 35px;
    }
  }
  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 250px;
  }
`

const tl = new TimelineMax({ paused: true })

class About extends Component {
  constructor(props) {
    super(props)
    this.state = { isTechOpen: false }
  }

  toggleTech = () => {
    this.setState({
      isTechOpen: !this.state.isTechOpen,
    })
  }

  componentDidMount() {
    tl.fromTo(
      myFrame,
      0.3,
      { opacity: '0' },
      { opacity: '1', ease: Power2.easeInOut }
    )
      .fromTo(
        myPic,
        1.5,
        { opacity: '0', transform: 'scale(0.5)' },
        { opacity: '1', transform: 'scale(1)', ease: Elastic.easeOut },
        '-=1'
      )
      .fromTo(
        myTitle,
        1,
        { opacity: '0' },
        { opacity: '1', ease: Power2.easeInOut },
        '-=3'
      )
      .fromTo(
        myButton,
        1,
        { scaleY: 0 },
        { scaleY: 1, ease: Expo.easeOut },
        '-=1'
      )
      .fromTo(
        myText,
        1,
        { opacity: '0', x: 100 },
        { opacity: '1', x: 0, ease: Power2.easeInOut },
        '-=1'
      )

    const checkHeight = () => {
      let isScrolling
      const sectionHeight = document.querySelector('#Home').offsetHeight
      window.addEventListener(
        'scroll',
        () => {
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling)

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(() => {
            const y = window.scrollY

            if (y > (sectionHeight / 10) * 3.3) {
              tl.resume()
            }
          }, 60)
        },
        { passive: true }
      )
    }

    checkHeight()
  }

  render() {
    return (
      <Wrapper id="About">
        <Layout>
          <Background />
          <StyledWrapper>
            <Frame id="myFrame">
              <h1 id="myTitle">ABOUT ME</h1>
              <Container>
                <AboutPicture id="myPic">
                  <Laptop />
                </AboutPicture>

                <p id="myText">
                  👋Hello there, my name is Jacek!
                  <br />
                  👨🏻‍💻 I am self taught frontend developer. <br />
                  🔭I like to use new technologies and some UI/UX principles to
                  improve website's look and feel. <br />
                  I’m constantly trying to improve and get to the next level.{' '}
                  <br /> ✍🏻 Check my work here or visit dribbble profile to find
                  more about me.
                </p>
              </Container>

              <ButtonWrapper id="myButton" onClick={this.toggleTech}>
                <ButtonAbout />
              </ButtonWrapper>
            </Frame>
          </StyledWrapper>
          <Technology
            isOpen={this.state.isTechOpen}
            closeTech={this.toggleTech}
          />
        </Layout>
      </Wrapper>
    )
  }
}

export default About
