import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { BiSearchAlt } from "react-icons/bi"

const SearchForm = () => {
    return (
        <InputGroup>
        <Input type="text" placeholder="Busque por..." _focus={{
            border: "solid 2px #d8d8d8",
            outline: "solid 2px #d8d8d8",
    }}/>
        <InputRightElement>
        <IconButton colorScheme="orange" icon={<BiSearchAlt />} aria-label={"Search database"} />
        </InputRightElement>
        </InputGroup>
    )
}

export default SearchForm;