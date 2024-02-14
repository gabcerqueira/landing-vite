import { Form } from "semantic-ui-react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const FormContainer = styled.div`
  width: 60%;
  max-width: 40rem;
  height: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const StyledForm = styled(Form)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h3`
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 88%;
`;

export const FormContent = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: space-around;

  padding: 1rem;
  flex-direction: column;
  align-items: center;
`;
