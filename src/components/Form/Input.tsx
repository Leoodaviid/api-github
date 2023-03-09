import { Error } from '../Helper/Error'
import { Container } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  erro?: string | null
}
export const Input = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  erro,
  ...rest
}: InputProps) => {
  return (
    <>
      <Container>
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
        <label htmlFor={name}>{label}</label>
        <span></span>
        {erro && <Error>{erro}</Error>}
      </Container>
    </>
  )
}
