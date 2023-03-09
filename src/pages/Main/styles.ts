import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`
export const Logo = styled.img`
  width: 130px;
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  color: ${({ theme }) => theme.colors.white};
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray600};
  width: 10%;
  height: 50px;
  border-radius: 0 0.25rem 0.25rem 0;

  svg {
    font-size: 42px;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    height: 50px;
    svg {
      font-size: 30px;
    }
  }
`
