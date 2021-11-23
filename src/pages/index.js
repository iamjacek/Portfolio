import React, { Component } from 'react'

import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Long from '../components/Sections/Long'
import SEO from '../components/seo'
import { Link } from 'gatsby'

//cookie info
import CookieConsent from 'react-cookie-consent'

class IndexPage extends Component {
  render() {
    return (
      <>
        <SEO title="Web Development - Jacek Witucki" />

        <CookieConsent
          style={{
            background: '#3d3d3d',
            borderTop: '2px solid white',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-beetwen',
          }}
          buttonStyle={{
            color: '#F0EBE7',
            background: '#DE4030',
            border: 'white 2px solid',
            fontSize: '.9rem',
            padding: '10px 35px',
            fontWeight: '300',
            fontFamily: 'Montserrat',
          }}
          contentStyle={{ color: '#FCFCFC' }}
          sameSite="strict"
        >
          This website uses cookies to enhance the user experience.{' '}
          <Link
            to="/privacy"
            style={{ color: '#FCFCFC', textDecoration: 'underline' }}
          >
            Read more about privacy here
          </Link>
          .
        </CookieConsent>
        <Home />
        <About />
        <Long />
      </>
    )
  }
}

export default IndexPage
