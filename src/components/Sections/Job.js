import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineMax, Elastic } from 'gsap'

import JobCard from '../JobCard/JobCard'

//images for portfolio job section
import pic from '../../assets/apayroll.png'
import pic2 from '../../assets/todo-auth-login.png'
import pic3 from '../../assets/gymsite.png'
import pic4 from '../../assets/beepline.png'
import pic5 from '../../assets/movie-app.png'

import canarinhosPreview from '../../assets/canarinhosPreview.png'

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.bigDesktop} {
    min-height: unset;
  }

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
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 2% 0 10% 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 10%;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    padding: 0 15%;
    margin: 5% 0;
  }
  @media (min-width: 2500px) {
    padding: 0 15%;
    margin: 8% 0;
    transform: scale(1.4);
  }
`

const tl = new TimelineMax({ paused: true })

class Job extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    tl.staggerFrom(
      '.jobExample',
      0.5,
      { scale: 0.9, y: -200, opacity: 0, ease: Elastic.easeOut },
      '0.2'
    )

    const checkHeight = () => {
      let isScrolling
      const homeHeight = document.querySelector('#Home').offsetHeight
      const aboutHeight = document.querySelector('#About').offsetHeight
      window.addEventListener(
        'scroll',
        () => {
          // Clear our timeout throughout the scroll
          window.clearTimeout(isScrolling)

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(() => {
            const y = window.scrollY

            if (y > ((homeHeight + aboutHeight) / 10) * 5.35) {
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
      <Wrapper id="MyWork">
        <h1 id="myTitle">MY WORK</h1>
        <StyledWrapper>
          <JobCard
            picture={pic4}
            title="BEEP-LINE"
            description="Online store deployed on netlify and heroku. Phone accessories for everyone!"
            liveLink="https://www.beep-line.com/"
            gitLink="https://github.com/iamjacek/accessories-store"
            tech={[
              'react',
              'strapi',
              'Stripe',
              'heroku',
              'Tailwind',
              'Apollo',
              'MongoDB',
              'Netlify',
            ]}
            classTL="jobExample"
          />
          <JobCard
            picture={pic5}
            title="MOVIE-SEARCH"
            description="Search and rate movies in big database!"
            liveLink="https://happy-ride-26a611.netlify.app/"
            gitLink="https://github.com/iamjacek/search-movie"
            tech={['react', 'netlify']}
            classTL="jobExample"
          />
          <JobCard
            picture={pic2}
            title="Not just TODO"
            description="Remake of my first app. Users can register and keep their notes private."
            liveLink="https://gracious-bohr-7738d8.netlify.app/"
            gitLink="https://github.com/iamjacek/todo-auth"
            tech={[
              'react',
              'strapi',
              'heroku',
              'materialUI',
              'Apollo',
              'MongoDB',
              'Netlify',
            ]}
            classTL="jobExample"
          />
          <JobCard
            picture={pic}
            title="A - payroll"
            description="Website for accountant company. Design, vectors, development and deployment."
            liveLink="https://blissful-ardinghelli-ed5cae.netlify.app/"
            gitLink="https://github.com/iamjacek/a-the-bookkeeping"
            tech={['html5', 'js', 'react', 'gatsby', 'styled component']}
            classTL="jobExample"
          />
          <JobCard
            picture={pic3}
            title="RPS Gym"
            description="Website for a gym. Design and development."
            liveLink="https://iamjacek.github.io/"
            gitLink="https://github.com/iamjacek/gymsite"
            tech={['html5', 'css3', 'js', 'parcel', 'sass', 'figma', 'bem']}
            classTL="jobExample"
          />
          <JobCard
            picture={canarinhosPreview}
            title="Me on Dribbble"
            description="Check my work on dribbble"
            liveLink="https://dribbble.com/iamjacek"
            tech={[
              'figma',
              'affinity designer',
              'dribbble',
              'ui/ux design',
              'web design',
            ]}
            classTL="jobExample"
          />
        </StyledWrapper>
      </Wrapper>
    )
  }
}

export default Job
