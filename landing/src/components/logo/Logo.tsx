import { Container, LogoImg, LogoLabel } from "./styles";

type Props = {
  labeled?: boolean;
};

function Logo({ labeled = true }: Props) {
  return (
    <Container>
      <LogoImg src="../../../logo-clean.png" alt="img" />
      {labeled && (
        <LogoLabel>India's first waterless car cleaning company</LogoLabel>
      )}
    </Container>
  );
}

export default Logo;
