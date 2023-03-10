import styled, { keyframes } from 'styled-components'

const spin = keyframes`
0% {
    transform: rotate(0deg);
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.4);
  }

  50% {
    transform: rotate(180deg);
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.4);
  }

  100% {
    transform: rotate(360deg);
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.4);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
