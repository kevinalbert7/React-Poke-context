import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Field, useField } from "formik"

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field 
        as={Input} 
        {...field} 
        {...props}
        border="1px"
        borderColor="gray.800"
        _placeholder={{ color: "gray.800" }}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}

export default TextField