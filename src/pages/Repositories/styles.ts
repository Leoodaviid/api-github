import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-direction: column;
  }
`
export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.black};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`

export const Main = styled.section`
  width: 100%;
  max-height: 100vh;
  padding: 2.5rem;
  overflow-y: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    height: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 2.5rem 1.25rem;
  }
`
