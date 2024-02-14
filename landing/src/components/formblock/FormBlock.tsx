import { InputHTMLAttributes } from "react";
import { Form } from "semantic-ui-react";
import { InputContainer } from "./styles";

interface FormBlockProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormBlock = ({ label, ...inputProps }: FormBlockProps) => {
  return (
    <InputContainer>
      <Form.Field>
        <label>{label}</label>
        <input {...inputProps} />
      </Form.Field>
    </InputContainer>
  );
};

export default FormBlock;
