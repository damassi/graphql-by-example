import { space } from "styled-system"
import styled from "styled-components"

export const Button = styled.button.attrs({
  my: 3,
  p: 1,
})`
  ${space};
  border: 1px solid #666;
  border-radius: 3px;
  color: #333;
  font-family: sans-serif;
  font-size: 14px;
`
