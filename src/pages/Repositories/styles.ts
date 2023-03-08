import styled from 'styled-components'

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

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
  min-height: 100vh;
  /* overflow-y: auto; */
`

export const Main = styled.section`
  width: 100%;
  max-height: 100vh;
  padding: 2rem;
  overflow-y: auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    width: auto;
    height: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 1rem;
  }
`
