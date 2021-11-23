import React, { useState } from 'react'
import styled from 'styled-components'
import next from '../../assets/arrowslider.svg'

const Wrapper = styled.div`
  width: 100%;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 16px;
    margin-bottom: 0;
  }
  h2 {
    margin-top: 5px;
    font-size: 12px;
  }
  ${({ theme }) => theme.media.tablet} {
    padding: 25px 5%;
  }
  ${({ theme }) => theme.media.tabletLandscape} {
    padding: 25px 10%;
  }
  ${({ theme }) => theme.media.desktop} {
    padding: 25px 20%;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    padding: 25px 25%;
    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 18px;
    }
  }
`

const Testimonials = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Arrow = styled.img`
  cursor: pointer;
  transform: ${({ left }) => (left ? 'rotate(180deg)' : '')};
  padding: 10px 10px;
  ${({ theme }) => theme.media.bigDesktop} {
    transform: ${({ left }) =>
      left ? 'rotate(180deg) scale(1.2)' : 'scale(1.2)'};
  }
`

const Carousel = () => {
  const [testiNo, switchTesti] = useState(1)

  const prevTesti = () => {
    if (testiNo === 1) switchTesti(testiNo - 1)
    if (testiNo === 2) switchTesti(testiNo - 1)
    if (testiNo === 0) switchTesti(testiNo + 2)
  }

  const nextTesti = () => {
    if (testiNo === 1) switchTesti(testiNo + 1)
    if (testiNo === 2) switchTesti(testiNo - 2)
    if (testiNo === 0) switchTesti(testiNo + 1)
  }

  return (
    <Wrapper>
      <Arrow left src={next} onClick={prevTesti} alt="Previous testimonials" />

      {testiNo === 1 && (
        <Testimonials>
          <h1>Great Communication. Very easy process with suprising effect!</h1>
          <h2>Anna CEO at Payroll</h2>
        </Testimonials>
      )}

      {testiNo === 2 && (
        <Testimonials>
          <h1>Excellent job! Highly recommended!</h1>
          <h2>Jack Martin at RPS Gym</h2>
        </Testimonials>
      )}

      {testiNo === 0 && (
        <Testimonials>
          <h1>Great Designs. I like your colors!</h1>
          <h2>Mike at Dribbble</h2>
        </Testimonials>
      )}

      <Arrow src={next} onClick={nextTesti} alt="Next testimonials" />
    </Wrapper>
  )
}

export default Carousel
