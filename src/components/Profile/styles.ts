import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`
export const Back = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  display: flex;
  text-align: center;
  gap: 0.2rem;
  text-align: start;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.gray500};
  }

  svg {
    font-size: 1.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-top: 0.5rem;
  }
`
export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`
export const Login = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
`
export const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: normal;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
  }
`
export const Inner = styled.div`
  padding: 1rem 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
  }
`
export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  svg {
    margin-right: 10px;
  }
`
