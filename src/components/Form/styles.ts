import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 20px;

  input {
    display: block;
    width: 100%;
    padding: 0.2rem;
    font-size: 2rem;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    background-color: transparent;

    &::placeholder {
      font-size: 1.5rem;
    }
    :focus + label {
      top: -20px;
      font-size: 12px;
      color: ${({ theme }) => theme.colors.white};
    }
    :focus + label + span {
      width: 100%;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      font-size: 1rem;
      &::placeholder {
        font-size: 1rem;
      }
      :focus + label {
        top: -20px;
        left: 0;
      }
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: rgba(204, 204, 204, 0);
    pointer-events: none;
    transition: all 0.3s ease;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease;
  }
`
