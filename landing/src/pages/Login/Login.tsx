import FormBlock from "../../components/formblock/FormBlock";
import Logo from "../../components/logo/Logo";
import CustomButton from "../../components/button/Button";
import {
  Container,
  LeftSide,
  RightSide,
  LogoContainer,
  FormContainer,
  BoxOverlay,
  FormContent,
  FormTitle,
  StyledForm,
  HelpLink,
  ForgotPasswordLink,
  ButtonWrapper,
} from "./styles";
import useLogin from "./hooks/useLogin";

const Login = () => {
  const { credentials, handleInputChange, handleSubmit } = useLogin();

  return (
    <Container>
      <LeftSide />
      <RightSide />
      <BoxOverlay>
        <HelpLink to="/need-help">Need help ?</HelpLink>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <FormContainer>
          <FormContent>
            <FormTitle>Log in</FormTitle>
            <StyledForm onSubmit={handleSubmit}>
              <FormBlock
                label="Email"
                name="email"
                placeholder="joe@email.com"
                onChange={handleInputChange}
                value={credentials.email}
              />

              <FormBlock
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleInputChange}
                value={credentials.password}
              />
              <ForgotPasswordLink to="/forgot-password">
                Forgot Password?
              </ForgotPasswordLink>
              <ButtonWrapper>
                <CustomButton type="submit">Login</CustomButton>
              </ButtonWrapper>
            </StyledForm>
          </FormContent>
        </FormContainer>
      </BoxOverlay>
    </Container>
  );
};

export default Login;
