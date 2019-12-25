import React, { useRef } from "react"
import { Flex } from "rebass"
import { Input } from "./Input"
import { Button } from "./Button"

interface SearchFieldProps {
  inputPlaceholder: string
  buttonText: string
  onSearch: (inputValue: string | undefined) => void
}

export const SearchField: React.FC<SearchFieldProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    props.onSearch(inputRef?.current?.value)
  }

  return (
    <Flex>
      <Input
        ref={inputRef}
        placeholder={props.inputPlaceholder}
        onKeyDown={event => {
          if (event.keyCode === 13) {
            handleSearch()
          }
        }}
      />
      <Button onClick={() => handleSearch()}>{props.buttonText}</Button>
    </Flex>
  )
}
