import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5vh 0.5vw;

  background: #FFFFFF;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  font-size: 1.2vw;
  cursor: pointer;
`

type TextProps = {
  children: string,
}

export default function GiftButton({ children }: TextProps) {
  return (
    <Button>{children}</Button>
  )
}
