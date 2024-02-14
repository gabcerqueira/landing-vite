import Logo from "../../components/logo/Logo";
import { Container, Content, Title, Text } from "./styles";

const NeedHelp = () => {
  const companySupportEmail = "support@example.com";
  const companySupportPhone = "+1-800-123-4567";

  return (
    <Container>
      <Content>
        <Logo labeled={false} />
        <Title>Need Help?</Title>
        <Text>
          If you require assistance or have any questions, please don't hesitate
          to contact us. You can reach out to our support team at{" "}
          {companySupportEmail} or call us at {companySupportPhone}.
        </Text>
      </Content>
    </Container>
  );
};

export default NeedHelp;
