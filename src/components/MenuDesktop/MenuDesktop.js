import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  display: none;
  position: relative;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  z-index: 98;
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`
const Item = styled.span`
  text-align: center;
`
const LinkMenuDesktop = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  width: 170px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.9rem;
  line-height: 2rem;
  text-transform: uppercase;
  padding: 1.5% 60px;
  transition: background 0.3s ease-out, color 0.2s ease-out,
    font-size 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    background: rgba(240, 235, 231, 1);
  }
  ${({ theme }) => theme.media.bigDesktop} {
    font-size: 1rem;
  }
  @media (min-width: 2500px) {
    font-size: 1.5rem;
  }
  @media (min-width: 3500px) {
    font-size: 1.9rem;
  }
`

const MenuDesktop = () => (
  <MenuWrapper>
    <LinkMenuDesktop href={'#Home'}>
      <Item>Home</Item>
    </LinkMenuDesktop>
    <LinkMenuDesktop href={'#About'}>
      <Item>About</Item>
    </LinkMenuDesktop>
    <LinkMenuDesktop href={'#MyWork'}>
      <Item>My Work</Item>
    </LinkMenuDesktop>
    <LinkMenuDesktop href={'#Testimonials'}>
      <Item>Testimonials</Item>
    </LinkMenuDesktop>
    <LinkMenuDesktop href={'#Contact'}>
      <Item>Contact</Item>
    </LinkMenuDesktop>
  </MenuWrapper>
)

export default MenuDesktop
