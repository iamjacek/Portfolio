import React, { Component } from 'react'
import styled from 'styled-components'
import LayoutLast from '../../Layout/LayoutLong'
import img from '../../assets/city.jpg'

import Job from './Job'
import How from './How'
import Contact from './Contact'

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}') bottom right;
    background-size: cover;
    opacity: .08;
    position: absolute;
    top: 0;
    left: 0; 
`

class Long extends Component {
  render() {
    return (
      <LayoutLast>
        <Background />

        <Job />

        <How />

        <Contact id="sectionContact" />
      </LayoutLast>
    )
  }
}

export default Long
