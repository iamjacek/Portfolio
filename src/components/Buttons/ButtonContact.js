import styled from 'styled-components'
import React from 'react'
import pattern from '../../assets/urban-sprite.png'

const ButtonWrapper = styled.div`
  @-webkit-keyframes ani {
    from {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }
    to {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }
  }
  @keyframes ani {
    from {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }
    to {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }
  }
  @-webkit-keyframes ani2 {
    from {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }
    to {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }
  }
  @keyframes ani2 {
    from {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }
    to {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }
  }
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 1002;
  bottom: 0;
  width: 220px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 1px;
  ${({ theme }) => theme.media.bigDesktop} {
    transform: scale(1.3);
  }
  button {
    width: 101%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    background: ${({ theme }) => theme.colors.red};
    -webkit-mask: url(${pattern});
    mask: url(${pattern});
    -webkit-mask-size: 3000% 100%;
    mask-size: 3000% 100%;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    -webkit-animation: ani2 0.7s steps(29) forwards;
    animation: ani2 0.7s steps(29) forwards;
    :hover {
      -webkit-animation: ani 0.7s steps(29) forwards;
      animation: ani 0.7s steps(29) forwards;
    }
  }
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  background-repeat: repeat;
  background-size: 100%;
  text-align: center;
  width: 101%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  position: absolute;
  font-size: 1rem;
  margin-top: 0;
  padding: 9px 0;
  overflow: hidden;
  letter-spacing: 1px;
`

const ButtonContact = () => {
  return (
    <ButtonWrapper>
      <Mask>Contact Form</Mask>
      <button type="button" name="Hover">
        Contact Form
      </button>
    </ButtonWrapper>
  )
}

export default ButtonContact
