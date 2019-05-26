import styled from 'styled-components';


const JobWrapper = styled.div`
        position: relative;

        width: 100%;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    ${({theme}) => theme.media.tabletVertical} {
      width: 50vw;
    }
    
    ${({theme}) => theme.media.laptop} {
      width: 400px;
    }
    ${({theme}) => theme.media.hd} {  
      width: 280px;
    }
`

  
  export default JobWrapper;