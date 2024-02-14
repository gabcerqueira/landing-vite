import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 12rem;
  height: 15rem;
  text-align: center;
`;

export const LogoImg = styled.img`
  width: 170px;
  height: 140px;

  @media screen and (max-width: 768px) {
    width: 130px;
    height: 100px;
  }
`;

export const LogoLabel = styled.span`
  overflow-wrap: break-word;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    overflow-wrap: break-word;
    font-weight: bold;
  }
`;
