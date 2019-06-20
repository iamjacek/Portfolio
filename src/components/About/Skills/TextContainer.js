import styled from 'styled-components';


const TextContainer = styled.div`
    position: relative;
    
    

    ${({theme}) => theme.media.tablet} {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    ${({theme}) => theme.media.tabletVertical} {
      position: absolute;
      width: 100%;
      height: 100%;
      
    }

`

  
  export default TextContainer;