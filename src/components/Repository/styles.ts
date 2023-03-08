import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-template-columns: 1fr;
  }
`
