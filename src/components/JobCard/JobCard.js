import React from 'react'
import styled from 'styled-components'

const View = styled.div`
  border-radius: 8px;
  margin: 20px 0;
  border: ${({ theme }) => theme.colors.gray} 1px solid;
  width: 300px;
  height: 350px;
  overflow: hidden;
  position: relative;
  display: inline-block;

  opacity: 1;
  ${({ theme }) => theme.media.tablet} {
    margin: 20px 10px;
  }

  :hover .zoom {
    transform: scale(1.1);
  }
  :hover .opacity {
    opacity: 0.9;
  }
  :hover .slide {
    transform: translateY(0px);
    opacity: 1;
  }
  :hover .fromLeft {
    transform: translate(0, -340px);
  }
  :hover .fromRight {
    transform: translate(0, -340px);
  }
  :hover h2 {
    font-size: 24px;
    background: linear-gradient(
      to left,
      black -280%,
      ${({ theme }) => theme.colors.red} 150%
    );
  }
  :hover p {
    opacity: 1;
    transform: translateY(-340px);
  }

  h2 {
    color: black;
    position: relative;
    top: 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 0px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    padding: 10px;
    margin: 0 0 20px 0;
    padding: 15px 0;
    color: ${({ theme }) => theme.colors.white};
    background: none;
    transform: translateY(-340px);
    transition: all 0.2s ease-out;
  }
  p {
    font-family: Georgia, serif;
    font-weight: 800;
    font-size: 18px;
    position: relative;
    padding: 10px;
    line-height: 24px;
    text-align: center;
    opacity: 0;
    color: ${({ theme }) => theme.colors.red};
    transform: translateY(-320px);
    transition: all 0.1s ease-out;
  }
`

const Picture = styled.img`
  width: 300px;
  height: 350px;
  object-position: top;
  object-fit: cover;
  display: block;
  transition: all 0.1s ease-out;
`

const Mask = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  transition: all 0.1s ease-out;
`

const Info = styled.a`
  display: inline-block;
  position: relative;
  transition: all 0.1s ease-out;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.red};
  padding: 7px 30px;
  border-radius: 18px;

  transform: ${({ left }) =>
    left ? 'translate(-250px, -310px)' : 'translate(250px, -310px)'};
  :hover {
    background: #e35344;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`

const Technology = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;
  display: block;
  color: black;
  text-align: center;
  opacity: 0;
  transform: translateY(150px);
  transition: all 0.1s ease-out;
`
const Feature = styled.div`
  text-transform: uppercase;
  display: inline-block;
  padding: 3px 10px;
  margin: 1px;
  border-radius: 12px;
  font-family: 'Montserrat', serif;
  font-weight: 600;
  font-size: 10px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};
  border: 1px ${({ theme }) => theme.colors.red} solid;
`

export default function JobCard({
  picture,
  title,
  description,
  liveLink,
  gitLink,
  tech,
  classTL,
}) {
  return (
    <View className={classTL}>
      <Picture src={picture} alt="A payroll" />
      <Mask className="opacity" />
      <h2>{title}</h2>
      <p>{description}</p>

      <InfoWrapper>
        <Info
          left
          href={liveLink}
          tabIndex="-1"
          target="_blank"
          rel="noreferrer"
          className="fromLeft"
        >
          LIVE
        </Info>
        {gitLink && (
          <Info
            href={gitLink}
            tabIndex="-1"
            target="_blank"
            rel="noreferrer"
            className="fromRight"
          >
            CODE
          </Info>
        )}
      </InfoWrapper>
      <Technology className="slide">
        <div>
          {tech.map(item => (
            <Feature key={item}>{item}</Feature>
          ))}
        </div>
      </Technology>
    </View>
  )
}
