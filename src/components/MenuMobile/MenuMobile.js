import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'
import { TimelineMax } from 'gsap'
import icon1 from '../../assets/tw.png'
import icon2 from '../../assets/in.png'
import icon3 from '../../assets/insta.png'
import icon4 from '../../assets/git.png'
import { Elastic } from 'gsap'

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-bottom: 12%;
  background: linear-gradient(
    to left,
    black -150%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 98;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: ${({ isOpen }) =>
    isOpen ? 'transform .2s ease-out' : 'transform .2s .6s ease-out'};
`

const LinkMenu = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 10px;
  padding: 20px;
  margin: 6px;
  background: linear-gradient(
    to left,
    black -280%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  text-align: center;
  width: 200px;
  border-radius: 5px;
  :active {
    background: linear-gradient(
      to left,
      black -220%,
      ${({ theme }) => theme.colors.gray} 150%
    );
  }
`

const SocialWrapper = styled.div`
  height: 10%;
  width: 100%;
  background: none;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.2s 0.6s ease-out;
`

const menuItems = ['Home', 'About', 'MyWork', 'Testimonials', 'Contact']

const tl = new TimelineMax()

class MenuMobile extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      console.log('open')
      tl.staggerFromTo(
        '.linkMenu',
        0.2,
        { scale: 0.5, opacity: 0, ease: Elastic.easeInOut },
        { scale: 1, opacity: 1, delay: 0.2, ease: Elastic.easeInOut },
        0.1
      )
    } else if (!this.props.isOpen) {
      tl.staggerTo(
        '.linkMenu',
        0.2,
        { scale: 0.5, opacity: 0, delay: 0, ease: Elastic.easeInOut },
        -0.1
      )
    }
  }

  render() {
    return (
      <MenuWrapper isOpen={this.props.isOpen}>
        {menuItems.map(item => (
          <LinkMenu
            isOpen={this.props.isOpen}
            key={item}
            href={'#' + item}
            className="linkMenu"
            onClick={this.props.handleClick}
          >
            {item === 'MyWork' ? 'My Work' : item}
          </LinkMenu>
        ))}
        <SocialWrapper isOpen={this.props.isOpen}>
          <Icon
            src={icon1}
            direct="https://twitter.com/JacekWitucki"
            aria="Twitter Web Development Jacek Witucki"
          />
          <Icon
            src={icon2}
            direct="https://www.linkedin.com/in/iamjacek/"
            aria="LinkedIn Web Development Jacek Witucki"
          />
          <Icon
            src={icon3}
            direct="https://www.instagram.com/i_am_jacek/"
            aria="Instagram Web Development Jacek Witucki"
          />
          <Icon
            src={icon4}
            direct="https://github.com/iamjacek"
            aria="Github Web Development Jacek Witucki"
          />
        </SocialWrapper>
      </MenuWrapper>
    )
  }
}

export default MenuMobile
