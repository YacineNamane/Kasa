import styled, { keyframes } from "styled-components";

// gestion d'animation du contenue de mes liste déroulantes avec un effet "fade"
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedContent = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
`;

export default AnimatedContent;
