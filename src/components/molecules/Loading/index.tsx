import styled, { css, keyframes } from 'styled-components';

export const LoadingSC = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.color.background.default};
  `}
`;
const ellipsis1 = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;

const ellipsis3 = keyframes`    
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
 `;

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
      transform: translate(24px, 0);
  }
`;

export const LoadIconSC = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    ${({ theme }) => css`
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: ${theme.color.secondary[500]};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    `}
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: ${ellipsis3} 0.6s infinite;
  }
`;

const LoaddingDots = () => {
  return (
    <LoadIconSC className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadIconSC>
  );
};

const Loading = () => {
  return (
    <LoadingSC>
      <LoaddingDots />
    </LoadingSC>
  );
};

export default Loading;
