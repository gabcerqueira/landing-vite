import {
  ButtonWrapper,
  Container,
  FormContainer,
  FormContent,
  FormTitle,
  StyledForm,
} from "./styles";
import FormBlock from "../../components/formblock/FormBlock";
import CustomButton from "../../components/button/Button";

import useForgotPassword from "./hooks/useForgotPassword";

function ForgotPassword() {
  const { email, handleInputChange, handleSubmit } = useForgotPassword();

  return (
    <Container>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <FormContent>
            <FormTitle>Forgot your Password ?</FormTitle>
            <span>Please provide your email for verification</span>
            <FormBlock
              label={"Email"}
              type="email"
              onChange={handleInputChange}
              value={email}
            />
            <ButtonWrapper>
              <CustomButton type={"submit"}>Reset</CustomButton>
            </ButtonWrapper>
            <a href="/">Back to login?</a>
          </FormContent>
        </StyledForm>
      </FormContainer>
    </Container>
  );
}

export default ForgotPassword;
