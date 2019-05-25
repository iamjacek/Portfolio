import styled from 'styled-components';


const SkillPic2 = styled.img`
    
    position: relative;
    width: calc(50px + 15vw);
    transition: all 600ms ease-in;

    ${({theme}) => theme.media.tablet} {
      position: absolute;
      top: initial;
      bottom: 20vh;
      right: initial;
      left: 10vw;
    }

    ${({theme}) => theme.media.tabletVertical} {
      position: absolute;
      top: unset;
      left: unset;
      right: calc(30vw + 6vw);
      bottom: 2vh;
      margin: 15vh 0;
      width: calc(50px + 10vw);
    }

    ${({theme}) => theme.media.laptop} {
      position: absolute;
      top: unset;
      left: unset;
      right: calc(100px + 5vw);
      bottom: 270px;
    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default SkillPic2;