import styled from 'styled-components'

export const Err = styled.p`
  width: 270px;
  color: #f31;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.md};
  left: 80px;
  margin: 1rem auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    left: -18px;
  }
`
