import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'
import Carousel from '../Carousel/Carousel'

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`

const CarouselWrapper = styled.div`
  width: 100%;
`

const tl = new TimelineMax({ paused: true })

class How extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    tl.fromTo('.howContent', 1, { opacity: 0 }, { opacity: 1 })
    const checkHeight = () => {
      let isScrolling
      const homeHeight = document.querySelector('#Home').offsetHeight
      const aboutHeight = document.querySelector('#About').offsetHeight
      const jobHeight = document.querySelector('#MyWork').offsetHeight
      window.addEventListener(
        'scroll',
        () => {
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling)

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(() => {
            const y = window.scrollY

            if (y > ((homeHeight + aboutHeight + jobHeight) / 10) * 7) {
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
      <Wrapper id="Testimonials">
        <StyledWrapper>
          <h1 className="howContent">Testimonials</h1>
          <CarouselWrapper className="howContent">
            <Carousel />
          </CarouselWrapper>
        </StyledWrapper>
      </Wrapper>
    )
  }
}

export default How
