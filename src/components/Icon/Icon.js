import React from 'react'
import styled from 'styled-components'

const IMG = styled.img`
  width: 48px;
  height: 48px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  margin: 15px;
  line-height: 84px;
  border-radius: 30%;
  position: relative;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.05);
  transition: 300ms;

  &:after {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content: '';
    box-sizing: content-box;
    box-shadow: 0 0 0 3px #fff;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 300ms;
  }
  &:hover {
    background-color: #fff;
    color: #00989a;
  }

  &:hover:after {
    opacity: 1;
    transform: scale(1.15);
  }
  ${({ theme }) => theme.media.bigDesktop} {
    width: calc(18px + 2vw);
    height: calc(18px + 2vw);
  }
`

const Icon = ({ aria, src, info, ...props }) => (
  <a
    {...props}
    href={props.direct}
    target="_blank"
    rel="noreferrer"
    aria-label={aria}
  >
    <IMG src={src} alt={info} />
  </a>
)

export default Icon
