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
  max-height: 100vh;
`

export const Main = styled.section`
  width: 100%;
  max-height: calc(100vh - 3rem);
  padding: 1.5rem;
  overflow-y: auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    width: auto;
    height: 100%;
    padding: 1rem;
  }
`
