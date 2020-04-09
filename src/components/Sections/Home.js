import React, { Component } from 'react'
import Layout from '../../Layout/Layout'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax } from 'gsap'
import '../../assets/loader.css'

import Logo from '../Logo/Logo'

import Icon from '../Icon/Icon'

import Header from '../Header/Header'

// ASSETS
import logoImg from '../../assets/Logo.png'
import img from '../../assets/background_home.jpg'
import imgArrow from '../../assets/arrow.png'
import icon1 from '../../assets/tw.png'
import icon2 from '../../assets/in.png'
import icon3 from '../../assets/insta.png'
import icon4 from '../../assets/git.png'

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: right 80%;
    background-size: cover; 
    opacity: .1;
    position: absolute;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;

    ${({ theme }) => theme.media.tabletLandscape}{
        height: 78%;
        width: 84%;
    }
`

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media (min-width: 1200px) {
    height: 100vh;
  }
`

const Gap = styled.div`
  margin: 0;
  width: 100%;
  height: 30%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const Scroll = styled.img`
  width: 70px;
  padding: 10px;
  cursor: pointer;
  opacity: 0;
  animation: float 2s ease-in-out infinite;
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`

const SocialWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translateY(200px);
`

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: #f0ebe7;
  position: absolute;
  top: 0;
  left: 0;
`

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.myBackground = null
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad = () => {
    console.log('LOADED')

    const tl = new TimelineMax()
    tl.fromTo(myLogo, 1.3, { y: '50%' }, { y: '0%', ease: Power2.easeInOut })
      .to(myLogo, 0.5, { rotation: 360, ease: Power2.easeInOut }, '-=0.8')
      .fromTo(
        myLogo,
        1,
        { scale: 0.8 },
        { scale: 1, ease: Power2.easeInOut },
        '-=0.8'
      )
      .fromTo(
        this.myBackground,
        1,
        { height: '0%' },
        { height: '80%', ease: Power2.easeInOut },
        '+1'
      )
      .fromTo(
        this.myBackground,
        1,
        { width: '74%' },
        { width: '100%', ease: Power2.easeInOut }
      )
      .fromTo(
        myGradient,
        3,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeInOut },
        '-=4'
      )
      .fromTo(
        mySocials,
        2,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: Power2.easeInOut },
        '-=1.5'
      )
      .fromTo(
        myArrow,
        2,
        { opacity: 0 },
        { opacity: 1, ease: Power2.easeInOut },
        '-=2'
      )
      .fromTo(
        myHeader,
        2,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, ease: Power2.easeInOut },
        '-=3'
      )
  }

  //animate home page using gsap, all IDs with prefix "my" has been created for gsap's purposes

  componentDidMount() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    if (window) {
      window.setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden')
        window.addEventListener('load', this.handleLoad())
      }, 300)
    } else {
      console.log('no window')
    }
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad())
  }

  render() {
    return (
      <Wrapper id="Home">
        <Layout gradient>
          <Logo src={logoImg} id="myLogo" />

          <Background ref={div => (this.myBackground = div)} />
          <Header />

          <Gap>
            <a href={'#About'}>
              <Scroll src={imgArrow} id="myArrow" />
            </a>
          </Gap>
          <SocialWrapper id="mySocials">
            <Icon src={icon1} direct="https://twitter.com/JacekWitucki" />
            <Icon src={icon2} direct="https://www.linkedin.com/in/iamjacek/" />
            <Icon src={icon3} direct="https://www.instagram.com/i_am_jacek/" />
            <Icon src={icon4} direct="https://github.com/iamjacek" />
          </SocialWrapper>
          <Gradient id="myGradient" />
        </Layout>
      </Wrapper>
    )
  }
}

export default Home
