import React from "react"
import { space } from "styled-system"
import styled from "styled-components"

export const ButtonBase = styled.button.attrs({
  my: 3,
  py: 1,
  px: 2,
})`
  ${space};

  border-radius: 3px;
  border: 1px solid #ccc;
  color: #333;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 14px;

  &:active {
    color: #e10098;
  }
`

export const Button = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>
}
