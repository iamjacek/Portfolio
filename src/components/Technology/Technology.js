import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'

import img from '../../assets/background_home.jpg'

import vector from '../../assets/vec.png'

import ButtonTech from '../Buttons/ButtonTech'

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: left bottom;
    background-size: cover; 
    opacity: .1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    black -220%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: ${({ isOpen }) =>
    isOpen ? 'transform 0.2s ease-out;' : 'transform 0.2s 0.7s ease-out;'};
  overflow: hidden;
  p {
    padding: 10%;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: -20px;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  padding: 20px;
`

const Field = styled.div`
  font-size: 16px;
  margin: 5px 0;
  line-height: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  opacity: 0;
  color: #b1aca9;
  ${({ theme }) => theme.media.desktop} {
    font-size: 18px;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    font-size: 24px;
  }
`

const Frame = styled.div`
  position: relative;
  padding-bottom: 50px;
  position: relative;
  height: 80%;
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
  z-index: 0;
`

const Group = styled.div`
  height: 50%;
  ${({ theme }) => theme.media.tablet} {
    height: 100%;
  }
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 18px;
    letter-spacing: 0.1rem;
    opacity: 0;
    ${({ theme }) => theme.media.desktop} {
      font-size: 22px;
    }
    ${({ theme }) => theme.media.bigDesktop} {
      font-size: 28px;
    }
  }
`
const Container = styled.div`
  padding: 50px 0;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`

const Graphic = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const tl = new TimelineMax()

const dismantle = () => {
  tl.staggerFromTo(
    '.myField',
    0.05,
    { x: 0, ease: Expo.easeOut },
    { x: -1000, ease: Expo.easeOut },
    '0.05'
  ).staggerFromTo(
    '.myField2',
    1,
    { x: 0, ease: Expo.easeOut },
    { x: 1000, ease: Expo.easeOut },
    '0.05',
    '-=0.05'
  )
}
const assemble = () => {
  tl.staggerFromTo(
    '.myField',
    0.3,
    { x: -1000, opacity: 0, ease: Expo.easeOut },
    { x: 0, opacity: 1, delay: 0.2, ease: Expo.easeOut },
    '0.1'
  ).staggerFromTo(
    '.myField2',
    1,
    { x: 1000, opacity: 0, ease: Expo.easeOut },
    { x: 0, opacity: 1, delay: 0.2, ease: Expo.easeOut },
    '0.1',
    '-=0.7'
  )
}

class Technology extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: this.props.isOpen }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      assemble()
    }
    if (!this.props.isOpen) {
      dismantle()
    }
  }

  render() {
    return (
      <StyledWrapper isOpen={this.props.isOpen}>
        <Background />

        <Frame>
          <Container>
            <Group>
              <h1 className="myField">Some stack I use:</h1>
              <Field className="myField">HTML, CSS, JS</Field>
              <Field className="myField">REACT, NODE, WORDPRESS</Field>
              <Field className="myField">MongoDB, Heroku, CLI</Field>
              <Field className="myField">FIGMA, ADOBE PS, XD</Field>
              <Field
                className="myField"
                style={{ marginTop: '2rem', lineHeight: '1.5rem' }}
              >
                If you need help, just ask! I might have experience in a field
                you need some help.
              </Field>
            </Group>

            <Group className="myField2">
              <Graphic>
                <img src={vector} />
              </Graphic>
              <a href="https://www.freepik.com/stories">Vector by stories</a>
            </Group>
          </Container>

          <ButtonWrapper onClick={this.props.closeTech}>
            <ButtonTech />
          </ButtonWrapper>
        </Frame>
      </StyledWrapper>
    )
  }
}

export default Technology
