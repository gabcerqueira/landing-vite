import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  height: 100vh;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  flex: 3;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const RightSide = styled.div`
  flex: 5;
  background-color: white;
`;

export const LogoContainer = styled.div`
  background-color: transparent;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  background-color: transparent;
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxOverlay = styled.div`
  width: 80%;

  height: 80%;
  display: inherit;
  position: absolute;
  top: 10%;
  left: 10%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 768px) {
    width: 90%;
    top: 5%;
    left: 5%;
    flex-direction: column;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 40rem;

  @media screen and (max-width: 768px) {
    height: 80%;
  }
`;

export const FormTitle = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const StyledForm = styled(Form)`
  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80%;
  @media screen and (max-width: 768px) {
    height: 80%;
    margin-top: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  margin-top: 6rem;
  @media screen and (max-width: 768px) {
    height: 80%;
    margin-top: 3rem;
  }
`;

export const HelpLink = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
  }
`;
export const ForgotPasswordLink = styled(Link)`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 2rem;
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
