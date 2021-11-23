import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby-link'

import ButtonTech from '../Buttons/ButtonTech'

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 25px;
  min-height: 800px;
  background: linear-gradient(
    to left,
    black -220%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 97;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.2s ease-out;

  p {
    padding: 10%;
  }
`

const ButtonWrapper = styled.div`
  border-radius: 8px;
  position: absolute;
  cursor: pointer;
  bottom: -25px;
  margin: 0 auto;
  width: 200px;
  height: 46px;
  padding: 20px;
`

const Frame = styled.div`
  border-radius: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80%;
  width: 80%;
  border: 3px solid ${({ theme }) => theme.colors.white};
  background: linear-gradient(
    to left,
    black -280%,
    ${({ theme }) => theme.colors.gray} 150%
  );

  z-index: 0;
`

const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 100%;
  z-index: 1001;
  padding: 10px;
  h2,
  p {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    ${({ theme }) => theme.media.tabletLandscape} {
      padding: 10px 0;
      max-width: 600px;
    }
  }
  ${({ theme }) => theme.media.bigDesktop} {
    transform: scale(1.2);
    max-width: 800px;
  }
  @media (min-width: 2500px) {
    transform: scale(1.8);
    max-width: 1200px;
  }
`

const NameForm = styled.input`
  transition: border 0.2s ease-out;
  position: relative;
  display: block;
  margin: 0px auto 2px auto;
  width: 100%;
  max-width: 500px;
  height: 5vh;
  background: transparent;
  border: none;
  border-bottom: solid 2px ${({ theme }) => theme.colors.white};
  text-align: center;
  z-index: 1;
  font-family: 'Roboto';
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.white};
  :focus {
    outline: none !important;
    border: solid 2px ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 3px #719ece;
  }
  ${({ theme }) => theme.media.tabletLandscape} {
    max-width: 600px;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    max-width: 800px;
    max-height: 50px;
  }
  @media (min-width: 2500px) {
    max-width: 1200px;
  }
`

const Label = styled.label`
  position: relative;
  width: 90%;
  margin: 0 auto 5px auto;
  display: block;
  max-width: 500px;
  z-index: 1;
  font-size: 0.8rem;
  ${({ theme }) => theme.media.tablet} {
    font-size: 1rem;
    margin: 0 auto 10px auto;
  }
  ${({ theme }) => theme.media.tabletLandscape} {
    max-width: 600px;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    max-width: 800px;
  }
  @media (min-width: 2500px) {
    max-width: 1200px;
  }
`

const EmailForm = styled.input`
  transition: border 0.2s ease-out;
  position: relative;
  display: block;
  margin: 10px auto 0px auto;
  width: 100%;
  max-width: 500px;
  height: 5vh;
  background: transparent;
  border: none;
  border-bottom: solid 2px ${({ theme }) => theme.colors.white};
  text-align: center;
  z-index: 1;
  font-family: 'Roboto';
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.white};
  :focus {
    outline: none !important;
    border: solid 2px ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 3px #719ece;
  }
  ${({ theme }) => theme.media.tabletLandscape} {
    max-width: 600px;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    max-width: 800px;
    max-height: 50px;
  }
  @media (min-width: 2500px) {
    max-width: 1200px;
  }
`

const MsgForm = styled.textarea`
  transition: border 0.2s ease-out;
  position: relative;
  display: block;
  margin: 0 auto 2px auto;
  width: 100%;
  max-width: 500px;
  height: 10vh;
  background: transparent;
  border: none;
  border-bottom: solid 2px ${({ theme }) => theme.colors.white};
  text-align: center;
  z-index: 1;
  font-family: 'Roboto';
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.white};
  :focus {
    outline: none !important;
    border: solid 2px ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 3px #719ece;
  }
  ${({ theme }) => theme.media.tablet} {
    height: 90px;
  }
  ${({ theme }) => theme.media.tabletLandscape} {
    max-width: 600px;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    max-width: 800px;
    max-height: 150px;
  }
  @media (min-width: 2500px) {
    max-width: 1200px;
  }
`

const ButtonWrap = styled.div`
  position: relative;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0;
  z-index: 1;
  ${({ theme }) => theme.media.tablet} {
  }
  ${({ theme }) => theme.media.desktop} {
  }
  ${({ theme }) => theme.media.bigDesktop} {
  }
`

const ButtonForm = styled.button`
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  display: block;
  margin: 0 auto;
  width: 200px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  margin-top: 20px;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: normal;
  transition: all 200ms ease-in;
  z-index: 1;
  padding: 10px 25px;

  :hover {
    background-color: ${({ theme }) => theme.colors.red};
    transition: all 200ms ease-in;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.red};
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Form(props) {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const formValidation = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let count = 0
    if (re.test(document.querySelector('input[name=email]').value)) ++count
    if (document.querySelector('input[name=firstName]').value.length > 1)
      ++count
    if (document.querySelector('textarea[name=message]').value.length > 5)
      ++count

    return count
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    if (formValidation() === 3) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error))
    }
  }

  return (
    <StyledWrapper isOpen={props.isOpen}>
      <Frame>
        <FormWrapper>
          <h2>CONTACT FORM</h2>
          <p>
            If you want to talk about project, collaboration or just say hello
            fill this form below or send an e-mail to info@jacekwitucki.com
          </p>
          <form
            name="contact-form"
            method="post"
            action="/thanks"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <Label htmlFor="firstName" id="nameLabel">
              <NameForm type="text" name="firstName" onChange={handleChange} />
              Name
            </Label>
            <Label htmlFor="email" id="emailLabel">
              <EmailForm type="text" name="email" onChange={handleChange} />
              Email
            </Label>

            <Label htmlFor="message" id="messageLabel">
              <MsgForm name="message" onChange={handleChange} />
              Message
            </Label>

            <ButtonWrap>
              <ButtonForm type="submit">Send</ButtonForm>
            </ButtonWrap>
          </form>
        </FormWrapper>

        <ButtonWrapper onClick={props.closeForm}>
          <ButtonTech />
        </ButtonWrapper>
      </Frame>
    </StyledWrapper>
  )
}
