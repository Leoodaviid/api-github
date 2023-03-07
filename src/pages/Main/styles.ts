import { Link } from 'react-router-dom'
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
export const Input = styled.input`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.25rem;
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  margin-right: 24px;
  padding: 0 1.5rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray700};
  }
`
export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray700};
  width: 80px;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.25rem;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray800};
  }
`
