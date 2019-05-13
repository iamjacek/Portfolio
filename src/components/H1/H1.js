import styled from 'styled-components';


const H1 = styled.h1`
    
    
    text-align: center;
    color: ${({theme}) => theme.colors.red};
    font-family: 'Montserrat Semibold', sans-serif;
    font-size: calc(40px + 1vw);

    ${({theme}) => theme.media.laptop} {
      position: absolute;
      top: 10vh;
      left: 0;
      right: 0;
      margin: 10px auto;
      font-size: calc(62px + 1vw);
      width: 100%;
    }
    ${({theme}) => theme.media.hd} {  
      font-size: calc(62px + 1vw);
    }
`

  
  export default H1;