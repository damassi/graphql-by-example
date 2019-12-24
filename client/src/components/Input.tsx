import { space } from "styled-system"
import styled from "styled-components"

export const Input = styled.input.attrs({
  type: "text",
  my: 3,
  mr: 4,
  p: 1,
})`
  ${space};
  color: #333;
  border: 0;
  border-bottom: 1px dashed #ccc;
`
