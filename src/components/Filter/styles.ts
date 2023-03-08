import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`
export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.gray800};
  color: ${(props) => props.color || props.theme.colors.gray300};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-radius: 0 20px 20px 0;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;
  cursor: pointer;

  &:hover,
  &.selected {
    background: ${(props) => props.color || props.theme.colors.gray300};
    color: ${(props) => (props.color ? props.theme.colors.white : props.theme.colors.black)};
    transform: translateX(5px) scale(1.02);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
    border-radius: 20px;

    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`
